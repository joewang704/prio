module Mutations
  class CompleteTask < BaseMutation
    argument :id, ID, required: true

    field :errors, [String], null: false

    def resolve(id:)
      Task.find(id).complete!
      { errors: [] }
    end
  end
end



