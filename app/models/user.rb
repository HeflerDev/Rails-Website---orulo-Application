class User < ApplicationRecord
  has_secure_password

  has_many :likes

  validates :name, presence: true, length: { minimum: 4 }, uniqueness: true
end
