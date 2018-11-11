# == Schema Information
#
# Table name: sessions
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  token      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Session < ApplicationRecord

  belongs_to :user
    class_name: :User,
    foreign_key: :user_id

  def self.generate_token
    SecureRandom::urlsafe_base64
  end

end
