class CreateSessions < ActiveRecord::Migration[5.2]
  def change
    create_table :sessions do |t|
      t.integer :user_id, null: false
      t.string :token, null: false

      t.timestamps
    end

    add_index :sessions, :token
  end
end
