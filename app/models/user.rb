# == Schema Information
#
# Table name: users
#
#  id             :bigint(8)        not null, primary key
#  username       :string           not null
#  user_image_url :string
#  email          :string           not null
#  pw_digest      :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  first_name     :string           not null
#  last_name      :string           not null
#

class User < ApplicationRecord
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i

  validates :username, :first_name, :last_name, :email, :pw_digest, presence: true
  validates :username, :email, :pw_digest, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :email, format: { with: VALID_EMAIL_REGEX, message: 'address is invalid'}

  has_many :sessions
  has_many :views
  has_many :videos,
    class_name: :Video,
    foreign_key: :uploader_id

  has_many :liked_videos,
    class_name: :Like,
    foreign_key: :user_id

  has_many :comments

  has_many :subscription_records,
    class_name: :Subscription,
    foreign_key: :subscriber_id

  has_many :channel_subscriptions,
    through: :subscription_records,
    source: :channel

  has_many :subscribers,
    class_name: :Subscription,
    foreign_key: :channel_id

  attr_reader :password

  def self.find_by_credentials(username, pw)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(pw) ? user : nil
  end

  def password=(pw)
    @password = pw
    self.pw_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(self.pw_digest).is_password?(pw)
  end

  def reset_session!(old_session_token = nil)
    destroy_session!(old_session_token) if old_session_token
    create_session!
  end

  def destroy_session!(old_session_token)
    self.sessions.find_by(token: old_session_token).destroy
  end

  private

  def create_session!
    self.sessions.create.token
  end

end
