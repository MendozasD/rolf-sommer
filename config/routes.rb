Rails.application.routes.draw do
  # mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  root "pages#home"
  get 'work', to: 'pages#work'
  get "work/:id", to: "pages#show", as: 'show'
  get 'steckbrief', to: 'pages#steckbrief'
  get 'kontakt', to: 'pages#kontakt'
end
