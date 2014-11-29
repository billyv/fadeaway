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



# define a route for the root of the site
get '/' do
  # render the views/index.erb template
	erb :index
end

post '/' do
  redirect '/'
end

get '/:name' do
end

post '/:name'
end

get '/:name/delete' do
end

get '/:name/delete/:id' do
end
