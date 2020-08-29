class CreateChecklistItemAssignees < ActiveRecord::Migration[6.0]
  def change
    create_table :checklist_item_assignees do |t|
      t.references :checklist_item, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
