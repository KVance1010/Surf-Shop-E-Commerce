const { User, Item } = require('../models')

const resolvers = {
    Query: {
        users:  async () => {
            return await User.find()
        },
        items: async () => {
            return await Item.find()
        },
        itemsByCategory: async (parent, args) => {
            return (await Item.find({
                tags: {$all: [...args.tags]}
            }))
        },  
    },   
}

module.exports = resolvers;