module Mutations
  class ActivateTask < BaseMutation
    argument :id, ID, required: true

    field :errors, [String], null: false

    def resolve(id:)
      check_authentication!
      user = User.find(context[:current_user_id])
      if user.tasks.active.count >= 3
        return { errors: ['User already has maximum number of active tasks'] }
      end
      Task.find(id).activate!
      { errors: [] }
    end
  end
end

