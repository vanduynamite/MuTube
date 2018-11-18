# == Schema Information
#
# Table name: videos
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  description :string
#  uploader_id :integer          not null
#  video_url   :string           not null
#  thumb_url   :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Video < ApplicationRecord
  validates :title, :uploader_id, presence: true

  belongs_to :uploader,
    class_name: :User,
    foreign_key: :uploader_id

  has_many :views

  has_one_attached :video_file

end
