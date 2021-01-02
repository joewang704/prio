import { useMutation } from 'react-apollo';
import gql from 'graphql-tag';

const LoginMutation = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      errors
      token
    }
  }
`;

const RegisterMutation = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      errors
      token
    }
  }
`;

export const useLogin = () => useMutation(LoginMutation);
export const useRegister = () => useMutation(RegisterMutation);
