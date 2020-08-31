class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.references :user, null: false, foreign_key: true
      t.references :project_status, null: false, foreign_key: true
      t.string :name
      t.text :description
      t.datetime :start_date
      t.datetime :due_date
      t.datetime :actual_completion_date
      t.string :banner
      t.boolean :favorite

      t.timestamps
    end
  end
end
