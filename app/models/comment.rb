# == Schema Information
#
# Table name: comments
#
#  id         :bigint(8)        not null, primary key
#  video_id   :integer          not null
#  user_id    :integer          not null
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :body, presence: true

  belongs_to :user
  belongs_to :video

  has_many :likes,
    class_name: :Like,
    foreign_key: :likeable_id,
    as: :likeable

end
