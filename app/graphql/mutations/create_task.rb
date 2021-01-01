module Mutations
  class CreateTask < BaseMutation
    argument :title, String, required: true
    argument :description, String, required: false
    argument :category_id, ID, required: true
    argument :duration, Integer, required: true

    field :errors, [String], null: false

    def resolve(title:, duration:, category_id:, description: nil)
      category = Category.find(category_id)
      user_id = 1
      user = User.find(user_id)
      Task.create!(
        title: title,
        duration: duration,
        description: description,
        category: category,
        user: user,
      )
      { errors: [] }
    end
  end
end