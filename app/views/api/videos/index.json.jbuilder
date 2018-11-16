@videos.each do |video|
  json.partial! 'api/videos/video.json.jbuilder', video: video, user: video.uploader
end
