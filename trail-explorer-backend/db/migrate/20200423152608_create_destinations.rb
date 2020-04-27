class CreateDestinations < ActiveRecord::Migration[5.2]
  def change
    create_table :destinations do |t|
      t.references :trek, polymorphic: true, index: true
      t.string :trail_name

      t.timestamps
    end
  end
end