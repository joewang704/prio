import { useMutation } from 'react-apollo';
import gql from 'graphql-tag';

const MUTATION = gql`
  mutation CreateTask($input: CreateTaskInput!) {
    createTask(input: $input) {
      errors
    }
  }
`;

export const useCreateTask = () => useMutation(MUTATION, { refetchQueries: ['Tasks'] });
