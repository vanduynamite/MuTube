class AddDefaultToVideoViews < ActiveRecord::Migration[5.2]
  def change
    remove_column :videos, :views
    add_column :videos, :views, :integer, default: 0
  end
end
