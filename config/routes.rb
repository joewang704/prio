Rails.application.routes.draw do
  root 'landing#index'
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/app', to: 'home#index'

  devise_for :users

  get '*path' => 'home#index'
end
