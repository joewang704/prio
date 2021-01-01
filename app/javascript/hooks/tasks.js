import { useMutation, useQuery } from 'react-apollo';
import gql from 'graphql-tag';

const tasksQuery = gql`
  query Tasks($userId: ID!) {
    tasks(userId: $userId) {
      id
      title
      description
      duration
      state
      category {
        name
      }
    }
  }
`;

const activateTaskMutation = gql`
  mutation ActivateTask($input: ActivateTaskInput!) {
    activateTask(input: $input) {
      errors
    }
  }
`;

const deactivateTaskMutation = gql`
  mutation DeactivateTask($input: DeactivateTaskInput!) {
    deactivateTask(input: $input) {
      errors
    }
  }
`;

const completeTaskMutation = gql`
  mutation CompleteTask($input: CompleteTaskInput!) {
    completeTask(input: $input) {
      errors
    }
  }
`;

export const useTasks = ({ userId }) => useQuery(tasksQuery, { variables: { userId }});

export const useActivateTask = () => useMutation(activateTaskMutation, { refetchQueries: ['Tasks'] });
export const useDeactivateTask = () => useMutation(deactivateTaskMutation, { refetchQueries: ['Tasks'] });
export const useCompleteTask = () => useMutation(completeTaskMutation, { refetchQueries: ['Tasks'] });
