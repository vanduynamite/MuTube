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
#  views       :integer
#

class Video < ApplicationRecord
  validates :title, :uploader_id, :video_url, :thumb_url, presence: true

  # commented out for testing purposes. Also not sure how much it matters
  ## as AWS is taking care of it
  #validates :video_url, :thumb_url, uniqueness: true

  belongs_to :uploader,
    class_name: :User,
    foreign_key: :uploader_id

end
