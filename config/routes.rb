Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do
      collection do
        get :search
      end

      post :subscribe, to: 'subscriptions#create'
      delete :unsubscribe, to: 'subscriptions#destroy'
    end

    resources :videos, only: [:create, :index, :show, :destroy] do
      resources :views, only: [:create]
      resources :likes, only: [:create]
      resources :comments, only: [:create]
    end

    resources :comments, only: [:destroy] do
      resources :likes, only: [:create]
    end

    resource :session, only: [:create, :destroy]

  end

end
