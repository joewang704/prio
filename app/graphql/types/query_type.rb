module Types
  class QueryType < Types::BaseObject
    field :tasks, [Types::TaskType], null: false do
      argument :user_id, ID, required: false
    end
    field :categories, [Types::CategoryType], null: false

    def tasks(user_id: nil)
      user_id ||= context[:current_user_id]
      Task.where(user_id: user_id)
    end

    def categories
      Category.all
    end
  end
end
