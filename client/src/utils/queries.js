import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
    query getUsers {
        users {
            _id
            firstName
            lastName
            email
        }
    }
`

export const QUERY_ITEMS = gql`
    query getItems {
        items {
        bestSeller
        brand
        description
        image
        name
        price
        saleItem
        saleItem
        stock
        tags
        }
    }
`

export const QUERY_ITEMS_BY_TAGS = gql`
    query Query($tags: [String]) {
        itemsByCategory(tags: $tags) {
        bestSeller
        brand
        description
        image
        name
        newArrival
        price
        saleItem
        stock
        tags
        }
    }
`
export const QUERY_ITEM_BY_NAME = gql`
query Query($name: String) {
    itemByName(name: $name) {
        name
        brand
        description
        image
        bestSeller
        newArrival
        price
        saleItem
        stock
        stock
      }
  }
`
export const QUERY_ITEM_BY_ID = gql`
    query ItemById($_id: String) {
        itemById(_id: $_id) {
        name
        bestSeller
        brand
        description
        image
        newArrival
        price
        saleItem
        stock
        tags
        }
    }
`
export const QUERY_ITEMS_BY_NAMES = gql`
    query getItemsByNames($names: [String]) {
        itemsByNames(names: $names) {
        name
        price
        image
        brand
        }
    }
`
export const GET_ME = gql`
query me {
    me {
      email
      firstName
      lastName
      _id
    }
  }
`