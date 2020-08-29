class ChecklistItemAssignee < ApplicationRecord
  belongs_to :checklist_item
  belongs_to :user
end
