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
export const ADD_ORDER = gql`
mutation Mutation($email: String, $itemNames: [String], $itemPrices: [Float], $itemQuantities: [Int], $createdAt: String) {
    addOrder(email: $email, itemNames: $itemNames, itemPrices: $itemPrices, itemQuantities: $itemQuantities, createdAt: $createdAt) {
      email
      itemNames
      itemQuantities
      itemPrices
      createdAt
    }
  }
`