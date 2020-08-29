class Task < ApplicationRecord
  belongs_to :task_bucket

  has_many :task_assignees
  has_many :task_comments
  has_many :task_labels
  has_many :checklist_items
end
