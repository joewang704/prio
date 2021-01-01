import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';

const QUERY = gql`
  query Categories {
    categories {
      id
      name
    }
  }
`;

export const useCategories = () => useQuery(QUERY);

