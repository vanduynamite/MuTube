class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.string :description
      t.integer :uploader_id, null: false
      t.string :video_url, null: false
      t.string :thumb_url, null: false

      t.timestamps
    end

    add_index :videos, :title
    add_index :videos, :uploader_id
    add_index :videos, :description
  end
end
