Rails.application.routes.draw do
  resources :blogs
  devise_for :users
  root :to => 'main#index'
  resources :skills do
    resources :projects
  end
  resources :projects
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
