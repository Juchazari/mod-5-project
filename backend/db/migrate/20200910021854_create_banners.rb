class CreateBanners < ActiveRecord::Migration[6.0]
  def change
    create_table :banners do |t|
      t.string :banner_url
    end
  end
end
