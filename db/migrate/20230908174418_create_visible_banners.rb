class CreateVisibleBanners < ActiveRecord::Migration[7.0]
  def change
    create_table :visible_banners do |t|
      t.boolean :visibility

      t.timestamps
    end
  end
end
