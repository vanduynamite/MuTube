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

video_urls = [
  "https://s3.amazonaws.com/mutube-videos/biggest_cat_that_purrs_and_meows_BXhfZRE08ko_1080p.mp4",
  "https://s3.amazonaws.com/mutube-videos/cat_has_a_crazy_deep_meow_w7x_lWJNnNg_1080p.mp4",
  "https://s3.amazonaws.com/mutube-videos/cat_meowing_sound_effect_download_rdYE3Wm6jX8_1080p.mp4",
  "https://s3.amazonaws.com/mutube-videos/cat_meowing_very_loudly_f67TcSJ6eTs_1080p.mp4",
  "https://s3.amazonaws.com/mutube-videos/Cute+Baby+Kitten+meows+because+Mama+Cat+is+not+there.mp4",
  "https://s3.amazonaws.com/mutube-videos/Cute+cat+meowing+to+get+outside..mp4",
  "https://s3.amazonaws.com/mutube-videos/every_cat_has_a_different_meowing_voice_4xhzacM1PSA_360p.mp4",
  "https://s3.amazonaws.com/mutube-videos/every_day_every_darn_day_9EYZnSXEla0_1080p.mp4",
  "https://s3.amazonaws.com/mutube-videos/female_cat_in_heat_meowing_mate_calling_tb24B2Y-51M_1080p.mp4",
  "https://s3.amazonaws.com/mutube-videos/Happy+Meowing+Cat.mp4",
  "https://s3.amazonaws.com/mutube-videos/kittens_and_cats_meowing_nX1YzS_CYIw_360p.mp4",
  "https://s3.amazonaws.com/mutube-videos/Ragdoll+cat+meowing.mp4",
  "https://s3.amazonaws.com/mutube-videos/cow_mooing_cow_mooing_sounds_100_real_J0HgEEY2jts_1080p.mp4",
  "https://s3.amazonaws.com/mutube-videos/cows_go_moo_baby_edition_cutest_compilation_YsM1QwjpUpc_1080p.mp4",
  "https://s3.amazonaws.com/mutube-videos/cows_mooing_b8-opJNfhUI_1080p.mp4",
  "https://s3.amazonaws.com/mutube-videos/cows_mooing_K_EsxukdNXM_360p.mp4",
]

thumb_urls = [
  "https://s3.amazonaws.com/mutube-videos/biggest_cat_that_purrs_and_meows_BXhfZRE08ko_1080p.mp4",
  "https://s3.amazonaws.com/mutube-videos/cat_has_a_crazy_deep_meow_w7x_lWJNnNg_1080p.mp4",
  "https://s3.amazonaws.com/mutube-videos/cat_meowing_sound_effect_download_rdYE3Wm6jX8_1080p.mp4",
  "https://s3.amazonaws.com/mutube-videos/cat_meowing_very_loudly_f67TcSJ6eTs_1080p.mp4",
  "https://s3.amazonaws.com/mutube-videos/Cute+Baby+Kitten+meows+because+Mama+Cat+is+not+there.mp4",
  "https://s3.amazonaws.com/mutube-videos/Cute+cat+meowing+to+get+outside..mp4",
  "https://s3.amazonaws.com/mutube-videos/every_cat_has_a_different_meowing_voice_4xhzacM1PSA_360p.mp4",
  "https://s3.amazonaws.com/mutube-videos/every_day_every_darn_day_9EYZnSXEla0_1080p.mp4",
  "https://s3.amazonaws.com/mutube-videos/female_cat_in_heat_meowing_mate_calling_tb24B2Y-51M_1080p.mp4",
  "https://s3.amazonaws.com/mutube-videos/Happy+Meowing+Cat.mp4",
  "https://s3.amazonaws.com/mutube-videos/kittens_and_cats_meowing_nX1YzS_CYIw_360p.mp4",
  "https://s3.amazonaws.com/mutube-videos/Ragdoll+cat+meowing.mp4",
  "https://s3.amazonaws.com/mutube-videos/cow_mooing_cow_mooing_sounds_100_real_J0HgEEY2jts_1080p.mp4",
  "https://s3.amazonaws.com/mutube-videos/cows_go_moo_baby_edition_cutest_compilation_YsM1QwjpUpc_1080p.mp4",
  "https://s3.amazonaws.com/mutube-videos/cows_mooing_b8-opJNfhUI_1080p.mp4",
  "https://s3.amazonaws.com/mutube-videos/cows_mooing_K_EsxukdNXM_360p.mp4",
]

partial_rand = Random.new(31415926)

titles.count.times do |i|
  video = Video.create(
    title: titles[i],
    description: descriptions[i],
    video_url: video_urls[i],
    thumb_url: thumb_urls[i],
    uploader_id: users[i % 4].id,
  )
  video.created_at = video.created_at - partial_rand.rand(100000000)
  video.save

  num_views = partial_rand.rand(10000)
  puts "#{num_views} for #{video.title}"
  num_views.times do |_|
    View.create(video_id: video.id, user_id: users.sample)
  end

end
