const { User, Item } = require('../models')

const resolvers = {
    Query: {
        users:  async () => {
            return User.find()
        },
        items: async () => {
            return Item.find()
        },
        itemsByCategory: async (parent, args) => {
            return (await Item.find({
                tags: {$all: [...args.tags]}
            }))
        },  
    },   
}

module.exports = resolvers;