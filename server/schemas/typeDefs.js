const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        password: String
    }
    type Item {
        _id: ID
        name: String
        price: Float
        description: String
        tags: [String]
        image: String
        stock: Int
        brand: String
        bestSeller: Boolean
        saleItem: Boolean
        newArrival: Boolean
    }

    type Auth {
        token: ID!
        user: User
    }
    type Order {
        email: String
        itemNames: [String]
        itemQuantities: [Int]
        itemPrices: [Float]
    }

    type Query {
        users: [User]
        user(email: String!): User
        items: [Item]
        itemsByCategory(tags: [String]): [Item]
        itemByName(name: String): Item
        itemById(_id: String): Item
        itemsByNames(names: [String]): [Item]
        me: User
        ordersByEmail(email: String): [Order]
    }

    type Mutation {
        addUser(firstName: String!, lastName: String, email: String, password: String): Auth
        login(email: String, password: String!): Auth
        addOrder(email: String, itemNames: [String], itemPrices: [Float], itemQuantities: [Int]): Order
    }
`

module.exports = typeDefs;