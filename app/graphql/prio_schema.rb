class PrioSchema < GraphQL::Schema
  mutation(Types::MutationType)
  query(Types::QueryType)

  # Opt in to the new runtime (default in future graphql-ruby versions)
  use GraphQL::Execution::Interpreter
  use GraphQL::Analysis::AST

  # Add built-in connections for pagination
  use GraphQL::Pagination::Connections

  # Rescue and return non-400 and 500 responses for errors
  use GraphQL::Execution::Errors

  rescue_from(Exception) do |err, obj, args, ctx, field|
    raise GraphQL::ExecutionError, err.message
  end
end
