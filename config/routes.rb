Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do
      collection do
        get :search
      end
    end
    resource :session, only: [:create, :destroy]

    resources :videos, only: [:create, :index, :show, :destroy] do
      resources :views, only: [:create]
      resources :likes, only: [:create]
    end
  end

end
