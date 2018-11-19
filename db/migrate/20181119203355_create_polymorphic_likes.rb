class CreatePolymorphicLikes < ActiveRecord::Migration[5.2]
  def change
    drop_table :likes

    create_table :likes do |t|
      t.integer :user_id, null: false
      t.boolean :is_dislike, null: false, default: false

      t.integer :likeable_id, null: false
      t.string :likeable_type, null: false

      t.timestamps
    end

    add_index :likes, [:user_id, :likeable_id, :likeable_type], unique: true
  end
end
