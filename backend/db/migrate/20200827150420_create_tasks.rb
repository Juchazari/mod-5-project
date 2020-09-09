class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.references :task_bucket, null: false, foreign_key: true
      t.string :name
      t.text :description, default: ""
      t.datetime :due_date
      t.string :banner
      t.boolean :completed

      t.timestamps
    end
  end
end
