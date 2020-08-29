class ChecklistItem < ApplicationRecord
  belongs_to :task

  has_many :checklist_item_assignees
end
