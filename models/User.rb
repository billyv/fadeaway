class User < ActiveRecord::Base
  has_many :friends, dependent: :destroy

  validates :name, presence: true, uniqueness:true

  has_secure_password
end
