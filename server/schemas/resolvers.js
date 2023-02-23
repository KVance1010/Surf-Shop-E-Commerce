const { User, Item } = require('../models')

const resolvers = {
    Query: {
        users:  async () => {
            return User.find()
        },
        itemsByCategory: async () => {
            return Item.find()
        }
    }
}

module.exports = resolvers;