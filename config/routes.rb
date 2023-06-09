Rails.application.routes.draw do
  root "pages#home"
  get 'work', to: 'pages#work'
  get 'steckbrief', to: 'pages#steckbrief'
  get 'kontakt', to: 'pages#kontakt'
end
