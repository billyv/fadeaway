class User < ActiveRecord::Base
  has_many :friends
  validates :name, uniqueness:true
end
