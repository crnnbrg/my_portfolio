Rails.application.routes.draw do


  root :to => 'main#index'
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  resources :posts do
    resources :comments
  end

  devise_for :users
  resources :skills do
    resources :projects
  end
  
    resources :recommendations
  resources :projects
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
