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
  belongs_to :user,
    optional: true
  belongs_to :video
end
