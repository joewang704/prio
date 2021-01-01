module Types
  class QueryType < Types::BaseObject
    field :tasks, [Types::TaskType], null: false do
      argument :user_id, ID, required: true
    end
    field :categories, [Types::CategoryType], null: false

    def tasks(user_id:)
      Task.where(user_id: user_id)
    end

    def categories
      Category.all
    end
  end
end
