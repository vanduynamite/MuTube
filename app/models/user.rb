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
  validates :username, :first_name, :last_name, :email, :pw_digest, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :sessions
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
