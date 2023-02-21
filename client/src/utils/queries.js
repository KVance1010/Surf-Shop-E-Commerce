import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
    query getUsers {
        users {
            username
            email
        }
    }
`