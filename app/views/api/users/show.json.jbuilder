# json.partial! 'api/users/user', user=@user
json.extract! @user, :id, :username, :first_name, :last_name, :user_image_url, :email
