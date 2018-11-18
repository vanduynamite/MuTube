class RefactorViews < ActiveRecord::Migration[5.2]
  def change
    remove_index :views, :user_id
    add_index :views, [:user_id, :video_id], unique: true

    add_column :videos, :views, :integer
  end
end
