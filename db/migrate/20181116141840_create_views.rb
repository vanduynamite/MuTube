class CreateViews < ActiveRecord::Migration[5.2]
  def change
    create_table :views do |t|
      t.integer :video_id
      t.integer :user_id

      t.timestamps
    end

    add_index :views, [:video_id, :user_id], unique: true
  end
end
