class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :video_id, null: false
      t.boolean :is_dislike, null: false, default: false

      t.timestamps
    end

    add_index :likes, [:user_id, :video_id], unique: true
  end
end
