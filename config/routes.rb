Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  root to: 'site#index'
  namespace :api do
    namespace :v1 do
      resources :scores, only: [:index, :create, :destroy, :update]
    end
  end
end
