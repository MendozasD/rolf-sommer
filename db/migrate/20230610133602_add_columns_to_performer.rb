class AddColumnsToPerformer < ActiveRecord::Migration[7.0]
  def change
    add_column :performers, :premiered, :boolean
    add_column :performers, :visible, :boolean
  end
end
