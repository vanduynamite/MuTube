# == Schema Information
#
# Table name: views
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  video_id   :integer          not null
#

class View < ApplicationRecord
  validates :video_id, uniqueness: { scope: :user_id,
    message: 'should only have one record per user.' }

  belongs_to :video
  belongs_to :user
    # optional: true # this used to be true when every view was recorded

end
