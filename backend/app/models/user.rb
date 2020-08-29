class User < ApplicationRecord
  has_secure_password

  has_many :projects
  has_many :project_members
  has_many :task_assignees
  has_many :task_comments
  has_many :checklist_item_assignees

  validates :first_name, :last_name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :username, uniqueness: true
  validates :password, presence: true, length: { in: 5..20 }
end
