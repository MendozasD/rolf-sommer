class CreateBanners < ActiveRecord::Migration[7.0]
  def change
    create_table :banners do |t|
      t.boolean :visible
      t.text :content
      t.string :url

      t.timestamps
    end
  end
end
