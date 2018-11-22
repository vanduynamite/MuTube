# == Schema Information
#
# Table name: subscriptions
#
#  id            :bigint(8)        not null, primary key
#  channel_id    :integer          not null
#  subscriber_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Subscription < ApplicationRecord
  validates :subscriber_id, uniqueness: { scope: :channel_id,
    message: 'is already subscribed to this channel.' }

  belongs_to :channel,
    class_name: :User,
    foreign_key: :channel_id

  belongs_to :subscriber,
    class_name: :User,
    foreign_key: :subscriber_id

end
