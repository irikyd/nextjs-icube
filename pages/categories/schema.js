import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
    {
        categories(filters: {}) {
            items {
                name
                id
            }
        }
    }
`;