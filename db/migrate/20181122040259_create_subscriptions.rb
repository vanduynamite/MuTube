class CreateSubscriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :subscriptions do |t|
      t.integer :channel_id, null: false
      t.integer :subscriber_id, null: false

      t.timestamps
    end

    add_index :subscriptions, [:channel_id, :subscriber_id], unique: true
  end
end
