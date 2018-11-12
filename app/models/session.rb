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
  validates :user_id, :token, presence: true
  validates :token, uniqueness: true

  belongs_to :user
  before_validation :create_token

  private

  def create_token
    self.token = Session.generate_token
  end

  def self.generate_token
    SecureRandom::urlsafe_base64
  end

end
