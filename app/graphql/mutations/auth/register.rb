module Mutations
  module Auth
    class Register < BaseMutation
      include Devise::Controllers::Helpers
      argument :email, String, required: true
      argument :password, String, required: true

      field :errors, [String], null: false
      field :token, String, null: true

      def resolve(email:, password:)
        user = User.create!(email: email, password: password)
        user.remember_me!
        token = User.serialize_into_cookie(user)
        context[:current_user] = user
        { errors: [], token: token }
      end
    end
  end
end
