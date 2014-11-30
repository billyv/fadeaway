# app.rb
# this is a simple Sinatra example app

# use bundler
require 'rubygems'
require 'bundler/setup'
# load all of the gems in the gemfile
Bundler.require
# functionality of active record
require './models/Friend'
require './models/User'

# enable cookie based sessions
enable :sessions

set :session_secret, '5AhdehiA3924HDad2h1901daHDIAx0'

# set up active record for database
if ENV['DATABASE_URL']
  ActiveRecord::Base.establish_connection(ENV['DATABASE_URL'])
else
  ActiveRecord::Base.establish_connection(
    :adapter  => 'sqlite3',
    :database => 'db/development.db',
    :encoding => 'utf8'
  )
end

before do
  @user = User.find_by(name: session[:name])
end


# login page
get '/' do
  if @user
    erb :friends_list
  else
	   erb :login
   end
end

# login callback
post '/login' do
  # Get a handle to a user with a name that matches the
  # submitted username. Returns nil if no such user
  # exists
  user = User.find_by(name: params[:name])
  if user.nil?
    # first, we check if the user is in our database
    @message = "User not found."
    erb :message_page
  elsif user.authenticate(params[:password])
    # if they are, we check if their password is valid,
    # then actually log in the user by setting a session
    # cookie to their username
    session[:name] = user.name
    redirect '/'
  else
    # if the password doesn't match our stored hash,
    # show a nice error page
    @message = "Incorrect password."
    erb :message_page
  end
end

get '/logout' do
  session.clear
  redirect '/'
end

# Handle the possiblity of errors while creating a new user
post '/new_user' do
  @user = User.create(params)
  if @user.valid?
    session[:name] = @user.name
    redirect '/'
  else
    @message = @user.errors.full_messages.join(', ')
    erb :message_page
  end
end

post '/new_friend' do
  #TODO
  @user.friends.create(description: params[:name], due: params[:email])
  redirect "/"
end

get '/delete_friend/:friend' do
  @friend = Friend.find(params[:friend])
  @user = @friend.user
  @friend.destroy
  redirect "/"
end
