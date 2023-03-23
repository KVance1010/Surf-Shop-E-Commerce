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
mutation Mutation($email: String, $itemNames: [String], $itemPrices: [Float], $itemQuantities: [Int], $itemImages: [String], $createdAt: String) {
    addOrder(email: $email, itemNames: $itemNames, itemPrices: $itemPrices, itemQuantities: $itemQuantities, itemImages: $itemImages, createdAt: $createdAt) {
      email
      itemNames
      itemQuantities
      itemPrices
      createdAt
      itemImages
    }
  }
`
export const ADD_ITEM = gql`
mutation Mutation($tags: [String], $name: String, $price: Float, $description: String, $image: String, $stock: Int, $brand: String, $bestSeller: Boolean, $saleItem: Boolean, $newArrival: Boolean) {
    addItem(tags: $tags, name: $name, price: $price, description: $description, image: $image, stock: $stock, brand: $brand, bestSeller: $bestSeller, saleItem: $saleItem, newArrival: $newArrival) {
      _id
      name
      price
      description
      tags
      image
      stock
      brand
      bestSeller
      saleItem
      newArrival
    }
  }
`
export const UPDATE_ITEM = gql`
mutation Mutation($uuid: String, $name: String, $price: Float, $description: String, $tags: [String], $image: String, $stock: Int, $brand: String, $bestSeller: Boolean, $saleItem: Boolean, $newArrival: Boolean) {
    updateItem(uuid: $uuid, name: $name, price: $price, description: $description, tags: $tags, image: $image, stock: $stock, brand: $brand, bestSeller: $bestSeller, saleItem: $saleItem, newArrival: $newArrival) {
      name
      price
      description
      tags
      image
      stock
      brand
      bestSeller
      saleItem
      newArrival
      uuid
    }
  }
`
export const DELETE_ITEM = gql `
mutation Mutation($uuid: String!) {
  deleteItem(uuid: $uuid) {
    name
  }
}
`
export const UPDATE_STOCKS_BY_NAMES = gql`
mutation UpdateStocksByNames($names: [String], $stocks: [Int]) {
  updateStocksByNames(names: $names, stocks: $stocks) {
    name
    stock
  }
}
`