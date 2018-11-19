# == Schema Information
#
# Table name: likes
#
#  id            :bigint(8)        not null, primary key
#  user_id       :integer          not null
#  is_dislike    :boolean          default(FALSE), not null
#  likeable_id   :integer          not null
#  likeable_type :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Like < ApplicationRecord
  validates :user_id, uniqueness: { scope: [:likeable_id, :likeable_type],
   message: 'should only have one like per item.' }

  belongs_to :user,
    class_name: :User,
    foreign_key: :user_id

  belongs_to :likeable,
    polymorphic: true

end
