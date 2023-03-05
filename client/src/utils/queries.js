import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
    query getUsers {
        users {
            username
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