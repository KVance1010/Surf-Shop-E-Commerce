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
        _id
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
        uuid
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
query Query($itemByIdId: ID!) {
    itemById(id: $itemByIdId) {
      name
      _id
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
export const QUERY_ITEM_BY_UUID =gql`
query Query($uuid: String!) {
    itemByUUID(uuid: $uuid) {
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
      uuid
    }
  }
`
export const QUERY_ITEMS_BY_NAMES = gql`
query Query($names: [String]) {
  itemsByNames(names: $names) {
    name
    price
    image
    brand
    stock
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

export const GET_ORDERS_BY_EMAIL = gql`
query Query($email: String) {
    ordersByEmail(email: $email) {
      email
      itemNames
      itemQuantities
      itemPrices
      createdAt
      itemImages
    }
  }
`