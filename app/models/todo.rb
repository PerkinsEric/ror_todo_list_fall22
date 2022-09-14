class Todo < ApplicationRecord
  belongs_to :list
  
  validates :title, :rating, presence: true
end
