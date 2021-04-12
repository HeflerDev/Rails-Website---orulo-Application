Rails.application.routes.draw do
  get 'likes/create'
  get 'likes/delete'
  namespace :api do
    namespace :v1 do
      get 'users/index'
      post 'users/create'
      get '/show/:id', to: 'users#show'
      put '/update/:id', to: 'users#update'
      delete '/destroy/:id', to: 'users#destroy'
    end
  end

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'

  get 'likes/index'
  get 'likes/list', to: 'likes#filter'
  post 'likes/create'
  get 'likes/show/:id', to: 'likes#show'
  delete 'likes/destroy'

  root 'homepage#index'
  get '/*path' => 'homepage#index'

  get '/profiles/:id', to: 'profiles#show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
