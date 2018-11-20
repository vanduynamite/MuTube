# == Schema Information
#
# Table name: videos
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  description :string
#  uploader_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  views       :integer          default(0)
#

class Video < ApplicationRecord
  validates :title, :uploader_id, presence: true

  belongs_to :uploader,
    class_name: :User,
    foreign_key: :uploader_id

  has_one_attached :video_file

  has_many :likes,
    class_name: :Like,
    foreign_key: :likeable_id,
    as: :likeable

  has_many :comments

  has_many :commenters,
    -> { distinct },
    through: :comments,
    source: :user

end
