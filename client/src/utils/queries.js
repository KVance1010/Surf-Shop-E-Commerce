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
    query getItemsByTag {
        itemsByCategory {
        bestSeller
        brand
        description
        name
        price
        newArrival
        image
        stock
        tags
        saleItem
        saleItem
        saleItem
        }
    }
`