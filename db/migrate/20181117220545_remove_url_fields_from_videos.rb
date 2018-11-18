class RemoveUrlFieldsFromVideos < ActiveRecord::Migration[5.2]
  def change
    remove_column :videos, :video_url
    remove_column :videos, :thumb_url
  end
end
