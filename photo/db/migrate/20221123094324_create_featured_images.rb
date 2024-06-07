class CreateFeaturedImages < ActiveRecord::Migration[7.0]
  def change
    create_table :featured_images do |t|
      t.string :image_url
      t.string :categorry 
      t.timestamps
    end
  end
end
