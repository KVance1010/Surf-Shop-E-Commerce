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
        uuid: String
    }

    type Auth {
        token: ID!
        user: User
    }
    type Order {
        _id: ID
        email: String
        itemNames: [String]
        itemQuantities: [Int]
        itemPrices: [Float]
        createdAt: String
        itemImages: [String]
    }

    type Query {
        users: [User]
        user(email: String!): User
        items: [Item]
        itemsByCategory(tags: [String]): [Item]
        itemByName(name: String): Item
        itemById(id: ID!): Item
        itemByUUID(uuid: String!): Item
        itemsByNames(names: [String]): [Item]
        me: User
        ordersByEmail(email: String): [Order]
    }

    type Mutation {
        addUser(firstName: String!, lastName: String, email: String, password: String): Auth

        login(email: String, password: String!): Auth

        addOrder(email: String, itemNames: [String], itemPrices: [Float], itemQuantities: [Int], itemImages: [String] createdAt: String): Order
        deleteOrder(id: ID): Order
        
        addItem(name: String, price: Float, description: String, tags: [String], image: String, stock: Int, brand: String, bestSeller: Boolean, saleItem: Boolean, newArrival: Boolean):Item

        updateItem(uuid: String, name: String, price: Float, description: String, tags: [String], image: String, stock: Int, brand: String, bestSeller: Boolean, saleItem: Boolean, newArrival: Boolean):Item

        deleteItem(uuid: String!): Item

        updateStocksByNames(names: [String], stocks: [Int]): [Item]
    }
`

module.exports = typeDefs;