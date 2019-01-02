# µTube

Hello and welcome to µTube, a pixel perfect clone of YouTube! Check out the live site [here][heroku]!

µTube is a fully functional YouTube clone complete with likes, comments, subscriptions, and of course viewing and uploading videos. It was built from the ground up starting with a Ruby on Rails backend and a PostGreSQL database. The frontend is a single-page React-Redux architecture complete with AJAX APIs to the backend and Redux style reducers to enforce the single source of truth model. Check out the wiki for the [schema][schema], sample slice of [state][state], and [front-][frontend] and [backend][backend] routes.

## Features
### Polymorphic Likes
I chose to build a polymorphic likes table to handle likes for both videos and comments. Polymorphism by default produces DRY code, and I went a step further by handling both API calls using the same logic on the Likes Controller.

When a user on the frontend clicks a like or dislike button on either a video or comment, a single action is dispatched to the controller which then determines what to do. It will create a like if the user has not yet liked or disliked the entity, update the like if the user has changed their mind about liking or disliking the video, or to delete the like if the user clicks a like they have already clicked. The controller uses the same code for both videos and comments, only needing to determine which type it is on entry and rendering the correct json jbuilder when complete.

```ruby
  ...
  if params[:video_id]
    @json_string = 'api/videos/like.json.jbuilder'
    @poly_entity = Video.find_by(id: params[:video_id])
    likeable_type = 'Video'
  end

  if params[:comment_id]
    @json_string = 'api/comments/like.json.jbuilder'
    @poly_entity = Comment.find_by(id: params[:comment_id])
    likeable_type = 'Comment'
  end

  @like = Like.find_by(
    likeable_id: @poly_entity.id,
    likeable_type: likeable_type,
    user_id: current_user.id
  )
  ...
```

### Auth with Multi-session Support
µTube uses BCrypt to store and compare password digests for modern security. In addition, µTube supports multiple sessions with the same user. Try this out by opening both a regular and an incognito tab and logging in as the demo user in both windows. And have peace of mind that you will not log any other demo user out while trying it out :). This was implemented by creating a `sessions` table in addition to the `users` table.

When the current user is needed on the backend, the `sessions` table is queried by the session token cookie, and the corresponding user is returned using ActiveRecord. Current user is stored as an instance variable to reduce database queries.

```ruby
  def current_user
    return @current_user if @current_user
    current_session = Session.find_by(token: session[:session_token])
    @current_user = current_session ? current_session.user : nil
  end
```


### User Interface
The CSS and level of detail on µTube is pristine, with all font colors, sizes, and layouts painstakingly and meticulously duplicated from YouTube. I encourage users to check out the smooth scaling when resizing the window on any page, the animations when clicking buttons, and the button transitions during upload (which allows drag and drop!). The login and signup forms are also extremely well formatted, with errors appearing beneath each incorrect field, and field labels transitioning on entry exactly as YouTube's login page.


![µTubeSignIn](https://github.com/vanduynamite/MuTube/blob/master/readme_imgs/µTube_sign_in.png)

![YouTubeSignIn](https://github.com/vanduynamite/MuTube/blob/master/readme_imgs/YouTube_sign_in.png)

### Other Features
There are of course many other features of µTube worth exploring. Try out the left sidebar through which you can explore specific lists of videos including your subscription feed, or try adding a comment and then deleting it. Of course try uploading a video, either by a file dialog, or through drag-and-drop! And more than anything, take a look at the code driving it - it is all from scratch and I am proud of every part.

[heroku]: https://mutube.herokuapp.com/#/
[schema]: https://github.com/vanduynamite/MuTube/wiki/Schema
[state]: https://github.com/vanduynamite/MuTube/wiki/Sample-State
[frontend]: https://github.com/vanduynamite/MuTube/wiki/Frontend-Routes
[backend]: https://github.com/vanduynamite/MuTube/wiki/Backend-Routes
