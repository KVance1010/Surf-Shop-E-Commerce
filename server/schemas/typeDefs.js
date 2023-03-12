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

    type Query {
        users: [User]
        user(email: String!): User
        items: [Item]
        itemsByCategory(tags: [String]): [Item]
        itemByName(name: String): Item
        itemById(_id: String): Item
        itemsByNames(names: [String]): [Item]
        me: User
    }

    type Mutation {
        addUser(firstName: String!, lastName: String, email: String, password: String): Auth
        login(email: String, password: String!): Auth
    }
`

module.exports = typeDefs;