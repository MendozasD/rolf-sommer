class CreatePerformers < ActiveRecord::Migration[7.0]
  def change
    create_table :performers do |t|
      t.string :piece
      t.string :role
      t.string :genre
      t.string :responsible
      t.string :location
      t.date :start_date
      t.date :end_date
      t.string :directed_by
      t.string :musiker
      t.string :choreo
      t.string :url
      t.text :comment
      t.boolean :actor
      t.boolean :director
      t.boolean :texter

      t.timestamps
    end
  end
end
