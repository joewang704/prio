module Types
  class MutationType < Types::BaseObject
    field :create_task, mutation: Mutations::CreateTask
    field :activate_task, mutation: Mutations::ActivateTask
    field :deactivate_task, mutation: Mutations::DeactivateTask
    field :complete_task, mutation: Mutations::CompleteTask
    field :remove_task, mutation: Mutations::RemoveTask

    field :login, mutation: Mutations::Auth::Login
    field :register, mutation: Mutations::Auth::Register
  end
end
