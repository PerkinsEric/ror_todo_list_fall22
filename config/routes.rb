Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :lists do
      resources :todos
    end

    resources :todos, except: [:index, :show, :create, :update, :destroy] do
      resources :notes 
    end
    
  end
  # Defines the root path route ("/")
  # root "articles#index"
end
