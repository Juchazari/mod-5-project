class TaskBucket < ApplicationRecord
  belongs_to :project

  has_many :tasks
end
