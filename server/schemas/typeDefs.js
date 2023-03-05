const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        username: String
        email: String
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

    type Query {
        users: [User]
        items: [Item]
        itemsByCategory(tags: [String]): [Item]
        itemByName(name: String): Item
        itemById(_id: String): Item
    }
`

module.exports = typeDefs;