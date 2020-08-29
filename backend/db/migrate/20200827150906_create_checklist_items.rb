class CreateChecklistItems < ActiveRecord::Migration[6.0]
  def change
    create_table :checklist_items do |t|
      t.references :task, null: false, foreign_key: true
      t.string :name
      t.datetime :due_date
      t.boolean :completed

      t.timestamps
    end
  end
end