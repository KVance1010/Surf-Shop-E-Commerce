import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($lastName: String, $firstName: String!, $email: String, $password: String) {
        addUser(lastName: $lastName, firstName: $firstName, email: $email, password: $password) {
            token
            user {
                firstName
                lastName
                email
                password
            }
        }
    }
`   