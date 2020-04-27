Rails.application.routes.draw do
  resources :destinations
  resources :follows
  resources :trips
  resources :trails
  get "/trails&search=query", to: "trails#index"
  get "/trails&lat=:lat&lon=:lon&maxResults=:max_results", to: "trails#trails_search"
  resources :users

  post '/login', to: 'auth#create'
  get '/profile', to: 'users#profile'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
