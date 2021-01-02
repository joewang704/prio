module Mutations
  module Auth
    class Login < BaseMutation
      argument :email, String, required: true
      argument :password, String, required: true

      field :errors, [String], null: false
      field :token, String, null: true

      def resolve(email:, password:)
        user = User.find_by!(email: email)
        unless user.present? && user.valid_password?(password)
          return { errors: ['Email & password did not match'] }
        end
        user.remember_me = true
        token = User.serialize_into_cookie(user)
        context[:current_user] = user
        { errors: [], token: token }
      end
    end
  end
end
