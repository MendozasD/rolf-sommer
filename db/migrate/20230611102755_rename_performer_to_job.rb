class RenamePerformerToJob < ActiveRecord::Migration[7.0]
  def change
    rename_table :performers, :jobs
  end
end
