# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo = User.create(
  username: 'demo',
  password: 'password',
  first_name: 'Demo',
  last_name: 'User',
  email: 'demo@user.com'
)

paul = User.create(
  username: 'vanduynamite',
  password: 'starwars',
  first_name: 'Paul',
  last_name: 'van Duyn',
  email: 'paul.vanduyn@gmail.com'
)
