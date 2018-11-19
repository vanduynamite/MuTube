# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

View.delete_all
Video.delete_all
User.delete_all

dev_null = Logger.new("/dev/null")
Rails.logger = dev_null
ActiveRecord::Base.logger = dev_null

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

audrey = User.create(
  username: 'audrakattack',
  password: 'starwars',
  first_name: 'Audrey',
  last_name: 'van Duyn',
  email: 'audrey.j.vanduyn@gmail.com'
)

simcha = User.create(
  username: 'scohen',
  password: 'starwars',
  first_name: 'Simcha',
  last_name: 'Cohen',
  email: 'scohen@fake.email'
)

mashu = User.create(
  username: 'mduek',
  password: 'starwars',
  first_name: 'Mashu',
  last_name: 'Duek',
  email: 'mduek@fake.email'
)

avi = User.create(
  username: 'avazana',
  password: 'starwars',
  first_name: 'Avichai',
  last_name: 'Vazana',
  email: 'avi@fake.email'
)

liyi = User.create(
  username: 'liyiyu',
  password: 'starwars',
  first_name: 'Li Yi',
  last_name: 'Yu',
  email: 'liyi@fake.email'
)

emily = User.create(
  username: 'emilycj',
  password: 'starwars',
  first_name: 'Emily',
  last_name: 'Jones',
  email: 'emily@fake.email'
)

john = User.create(
  username: 'jkim',
  password: 'starwars',
  first_name: 'John',
  last_name: 'Kim',
  email: 'john@fake.email'
)

sallem = User.create(
  username: 'sahmed',
  password: 'starwars',
  first_name: 'Sallem',
  last_name: 'Ahmed',
  email: 'sallem@fake.email'
)

amir = User.create(
  username: 'asojitra',
  password: 'starwars',
  first_name: 'Amir',
  last_name: 'Sojitra',
  email: 'amir@fake.email'
)

users = [
  demo,
  paul,
  audrey,
  simcha,
  mashu,
  avi,
  liyi,
  emily,
  john,
  sallem,
  amir,
]

titles = [
  "Biggest cat that purrs and meows",
  "Cat has a crazy deep meow",
  "Cat meowing sound effect download", #3
  "Cat meowing very loudly",
  "Cute baby kitten meows because mama cat is not here",
  "Cute cat meowing to get outside", #6
  "Every cat has a different meowing voice",
  "Every day every darn day",
  "Female cat in heat meowing mating call", #9
  "Happy meowing cat",
  "Kittens and cats meowing",
  "Ragdoll meowing", #12
  "Cow mooing cow mooing sounds 100 real",
  "Cows go moo baby edition cutest compilation",
  "Cows mooing", #15
  "Cows mooing",
]

descriptions = [
  "Biggest cat that purrs and meows",
  "Cat has a crazy deep meow",
  "Cat meowing sound effect download",
  "Cat meowing very loudly",
  "Cute baby kitten meows because mama cat is not here",
  "Cute cat meowing to get outside",
  "Every cat has a different meowing voice",
  "Every day every darn day",
  "Female cat in heat meowing mating call",
  "Happy meowing cat",
  "Kittens and cats meowing",
  "Ragdoll meowing",
  "Cow mooing cow mooing sounds 100 real",
  "Cows go moo baby edition cutest compilation",
  "Cows mooing",
  "Cows mooing",
]

# out of date...
# video_urls = [
#   "https://s3.amazonaws.com/mutube-videos/KvsfLxQhMqZxNWGJDZhwtpbb",
#   "https://s3.amazonaws.com/mutube-videos/4pVfZpxfgcSUKab7qvHTY7ut",
#   "https://s3.amazonaws.com/mutube-videos/A3VxEagXSYArPAJwEcz7Weqk", #3
#   "https://s3.amazonaws.com/mutube-videos/WcxoT9JWvcuw7jWNnPbkkhv4",
#   "https://s3.amazonaws.com/mutube-videos/MkXZXu6gUakpTjXeSpWb4h4X",
#   "https://s3.amazonaws.com/mutube-videos/AnKTKPrcyct5T6LBLnXUBjBs", #6
#   "https://s3.amazonaws.com/mutube-videos/er7sHG6LZdngomtPU6WoHjqo",
#   "https://s3.amazonaws.com/mutube-videos/e3XKQwZMrrJRWEv4yq7HAt8L",
#   "https://s3.amazonaws.com/mutube-videos/pi34butEbsH6vekuYRC4oHLv", #9
#   "https://s3.amazonaws.com/mutube-videos/Dj2DR9SxtmuQCravvXJrv6dy",
#   "https://s3.amazonaws.com/mutube-videos/crQrev1KGskpVTiRaWvh9V1i",
#   "https://s3.amazonaws.com/mutube-videos/vRc86Uk6tr9zRBSRGHBAs9Dr", #12
#   "https://s3.amazonaws.com/mutube-videos/D6HUXKY93FafHVJFtb5fL4qS",
#   "https://s3.amazonaws.com/mutube-videos/n1bEv8Ggh6F3ogNaio9Lg6QU",
#   "https://s3.amazonaws.com/mutube-videos/BUHvLBdC9XWrhDHd5i6p9yCM", #15
#   "https://s3.amazonaws.com/mutube-videos/kLCVdr6scQW9qPZPTkvpSQqv",
# ]

# partial_rand = Random.new(31415926)
#
# titles.count.times do |i|
#   video = Video.new(
#     title: titles[i],
#     description: descriptions[i],
#     uploader_id: users[i % 4].id,
#   )
#
#   # for seeding from desktop
#   filepath = "/Users/paul/Desktop/µTube_seeds/#{i+1}.mp4"
#   filename = "#{i+1}.mp4"
#   video.video_file.attach(io: File.open(filepath), filename: filename)
#
#   # for seeding from S3, if the videos are there and the same as above links
#   # filepath = video_urls[i]
#   # file = EzDownload.open(filepath)
#   # filename = filepath.split("https://s3.amazonaws.com/mutube-videos/")[1]
#   # video.video_file.attach(io: file, filename: filename)
#   # video.save!
#
#   num_views = partial_rand.rand(5000)
#   puts "#{num_views} for #{video.title}"
#   video.views = num_views
#   video.save
#
#   video.created_at = video.created_at - partial_rand.rand(100000000)
#   video.save
#
# end
