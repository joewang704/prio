module Mutations
  class RemoveTask < BaseMutation
    argument :id, ID, required: true

    field :errors, [String], null: false

    def resolve(id:)
      # TODO: verify that user in context belongs to id
      Task.find(id).destroy!
      { errors: [] }
    end
  end
end
