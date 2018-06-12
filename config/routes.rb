Rails.application.routes.draw do
  namespace :api do
    resources :products, only: [:index, :create, :update, :destroy]
  end

  
end
