# µTube

Hello and welcome to µTube, a pixel perfect clone of YouTube! Check out the live site [here][heroku]!

This project was built using a Ruby on Rails backend with a PostGreSQL database. The frontend is a single-page React-Redux architecture complete with AJAX APIs to the Rails backend and Redux style reducers to enforce the single source of truth model. Check out the wiki for the [schema][schema], sample slice of [state][state], and [front-][frontend] and [backend][backend] routes. 

## Features
### Polymorphic Likes
I chose to build a polymorphic likes table to handle likes for both videos and comments. Polymorphism by default produces DRY code, and I went a step further by handling both API calls using the same logic on the Likes Controller.

When a user on the frontend clicks a like or dislike button on either a video or comment, a single action is dispatched to the controller which then determines what to do. It will create a like if the user has not yet liked or disliked the entity, update the like if the user has changed their mind about liking or disliking the video, or to delete the like if the user clicks a like they have already clicked. The controller uses the same code for both videos and comments, only needing to determine on entry which type it is.

### User Interface
The CSS and level of detail on µTube is pristine, with all font colors, sizes, and layouts painstakingly and meticulously duplicated from YouTube. I encourage users to check out the smooth scaling when resizing the window on any page, the animations when clicking buttons, and the button transitions during upload (which allows drag and drop!). The login and signup forms are also extremely well formatted, with errors appearing beneath each incorrect field, and field labels transitioning on entry exactly as YouTube's login page.


![µTubeSignIn](https://lh3.googleusercontent.com/t0tA9kgwUinXI26bmiWEobuxnHZ1E1WASLh6Ily54R0C0d-3zgf7IJGP-ZRSZOe2F2moM1JspaWUmNH4d9BTzE4hUD0cDq2JFedhdw6fUyDxlmhk2CBZjP4YIRKU84FZ2JcYuL-8u1z0VaP5ICxbwrBGgJpNdHkSfGK4oJ9smrLn-2yTZKLnev1ILeq4ckNr-SCPDDuwlXtQeAPXZGb__m0TCdxTGt9npTM1k7KoeIg3klGCHkjxW47dDgw_2OPEomI_sKcCx3Rm8uCXTXw7dhiGbIFPxYccdJ7_EYO6J91aHo9sO9IFcWxsnDctmwdb8s94nQgcqlp7j2PoGA2amt7Dz60uqXDpTcuH-mt0a9KjSCqAzb6CLYKCCeMh3G3fKwMloZYnSbgm0AYMIM8Ygkn1-fZuD6HdsWSnGPOMyp0UoASPZrVyOb_tExo34oe5tkp7nprL7K5F8MXnVSduoYiKzafXeHficQH5OAGstPaXiIY6R-BoidgG_nJiBLPyOFit9w_0FU7oKTVR81mfDAdLAFjcG5TVWyTMxXVIQUIi2t4hq7NDrksGo4z5A1Eag1Ss3vZzkTSi5cQOtZxWCzOSPB8FH_j18r1qj2bAQ0EVn4xCJ-Qiy0fOJV-l7VVQ6aYoi5vmcSAOnJfEOyVY3wY1cVWRwOQBu27cnEoH6M5Cimv9QjjmGEfXMopZx8UGFo-ge8NY3PGtHIEKP1M=w474-h526-no)

![YouTubeSignIn](https://lh3.googleusercontent.com/6Z_mqcPSGuNQKg5MgxrNrp1FKquzkTBpeA97R8GQsctb0a9nOet0188Ds5p15WxvB4Wd4Q2he-g0TszXhxUrbf9rnTnkTyyKhz-JMf1ci6N2AyTdPmWNmt3e2VXMLbtFBwP1hqXcFCopTRWn-LZmNyh1IpiuXGcS1wWviYvRkCFveJ-DK7GV-v5gYSbvZLYmG8qOgNM-kTD9uHHKY9Q3XLJfIe0pcFCYrriZwRSAc-QkEF72WH_NzRhK8adWbLK5tT8HQcOHiKGSV7loEKf6aG-fZQT78l43S7ZhzHoDFpm1xPhYdYHM9n-pI8VWf2tm7POznHFP7fMsYm0cVaqYFWmc-dEjfCvN85Bwf1I77Vw05GgBDDnkAawkyjQcVzRBbLd6nirqIv8CkGUUHnhI9GF45PlAvopfWKYOFdjsKl8QsMpV5E-DICgOdL3PjBJG6zx84UomKhTc31c7Bb9xs4cUuaB6b5h3q5iUlhA_wD6qPSQxkDkDOgD9mbFrY5eTKptyKnDbN29nyuz6LHw33IUhVmp-oAohGowlc7EDGAioAYTfr6bS-Ouaqzn3VfBwfb3vG6vI165YzP2DjY6RsT_zDG3ev2mzsn26ozSRUjhO454jdxJkvm3VEjWNa8RNJy3bK0KmY-_GJq5JdiUSbyvMDA=w476-h526-no)



[heroku]: https://mutube.herokuapp.com/#/
[schema]: https://github.com/vanduynamite/MuTube/wiki/Schema
[state]: https://github.com/vanduynamite/MuTube/wiki/Sample-State
[frontend]: https://github.com/vanduynamite/MuTube/wiki/Frontend-Routes
[backend]: https://github.com/vanduynamite/MuTube/wiki/Backend-Routes
