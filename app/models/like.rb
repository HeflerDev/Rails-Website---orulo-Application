class Like < ApplicationRecord
  belongs_to :user

  validates :building, presence: true
end
