Rails.application.routes.draw do
  root 'homepage#index'

  get '/profiles/:id', to: 'profiles#show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
