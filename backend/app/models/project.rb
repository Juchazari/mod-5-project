class Project < ApplicationRecord
  belongs_to :user

  has_many :project_members, dependent: :destroy
  has_many :task_buckets, dependent: :destroy
end
