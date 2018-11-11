class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :name, null: false
      t.string :user_image_url
      t.string :email, null: false
      t.string :pw_digest, null: false

      t.timestamps
    end

    add_index :users, :username, unique: true
    add_index :users, :name, unique: true
    add_index :users, :email, unique: true
  end
end
