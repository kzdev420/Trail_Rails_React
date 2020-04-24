class CreateTrips < ActiveRecord::Migration[5.2]
  def change
    create_table :trips do |t|
      t.integer :user_id

      t.text :title
      t.text :description
      t.text :location
      t.float :stars
      t.string :image

      t.timestamps
    end
  end
end