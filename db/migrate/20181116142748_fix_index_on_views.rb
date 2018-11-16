class FixIndexOnViews < ActiveRecord::Migration[5.2]
  def change
    remove_index :views, [:video_id, :user_id]
    add_index :views, :video_id
    add_index :views, :user_id

    remove_column :views, :video_id
    add_column :views, :video_id, :integer, null: false
  end
end
