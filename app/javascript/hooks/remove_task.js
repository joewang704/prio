import { useMutation } from 'react-apollo';
import gql from 'graphql-tag';

const MUTATION = gql`
  mutation RemoveTask($input: RemoveTaskInput!) {
    removeTask(input: $input) {
      errors
    }
  }
`;

export const useRemoveTask = () => useMutation(MUTATION, { refetchQueries: ['Tasks'] });