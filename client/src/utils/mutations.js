import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($lastName: String, $firstName: String!, $email: String, $password: String) {
        addUser(lastName: $lastName, firstName: $firstName, email: $email, password: $password) {
            token
            user {
                firstName
                lastName
                email
            }
        }
    }
`  
export const LOGIN_USER = gql`
    mutation login($password: String!, $email: String) {
        login(password: $password, email: $email) {
            token
            user {
                firstName
                lastName
                email
            }
        }
    }
` 