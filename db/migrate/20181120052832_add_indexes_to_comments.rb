class AddIndexesToComments < ActiveRecord::Migration[5.2]
  def change
    add_index :comments, :user_id
    add_index :comments, :video_id
  end
end
