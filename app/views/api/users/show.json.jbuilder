# json.partial! 'api/users/user', user=@user
json.extract! @user, :id, :username, :name, :user_image_url
