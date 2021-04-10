class User < ApplicationRecord
  has_secure_password

  has_many :likes
  has_many :real_states, through: :likes

  validates :name, presence: true, length: { minimum: 4 }, uniqueness: true
  validates :password_digest, presence: true
end
