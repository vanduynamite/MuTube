# == Schema Information
#
# Table name: users
#
#  id             :bigint(8)        not null, primary key
#  username       :string           not null
#  name           :string           not null
#  user_image_url :string
#  email          :string           not null
#  pw_digest      :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class User < ApplicationRecord
  validates :username, :name, :email, :pw_digest, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true}

  has_many :sessions
    class_name: :Session
    foreign_key: :user_id

  attr_reader :password

  def self.find_by_credentials(username, pw)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(pw)
  end

  def password=(pw)
    @password = pw
    self.pw_digest = BCrypt::Password.create(pw)
  end

  def reset_session!(old_session_token)
    destroy_session!(old_session_token)
    create_session!
  end

  def destroy_session!(old_session_token)
    self.sessions.find_by(token: old_session_token).destroy
  end

  private

  def is_password?(pw)
    BCrypt::Password.new(self.pw_digest).is_password?(pw)
  end


  def create_session!
    new_session = self.sessions.create(token: Session.generate_token)
    new_session.token
  end

end
