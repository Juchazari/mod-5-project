class CreateTaskLabels < ActiveRecord::Migration[6.0]
  def change
    create_table :task_labels do |t|
      t.references :task, null: false, foreign_key: true
      t.string :name

      t.timestamps
    end
  end
end
