class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.belongs_to :user, index: true
      t.belongs_to :followed_user, index: true
      t.index [:user_id, :followed_user_id], unique: true

      t.timestamps
    end
  end
end