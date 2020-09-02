Rails.application.routes.draw do
  post 'api/auth/login',    to: 'users#login'
  post 'api/auth/register', to: 'users#create'
  get  'api/current_user',  to: 'users#current_user'
  
  resources :projects, only: [:index, :show, :update]
end
