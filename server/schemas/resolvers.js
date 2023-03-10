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
        itemsByNames: async (partent, args) => {
            return (await Item.find({
                
                name: {$in: [...args.names]}
            }))
        },
        itemByName: async (parent, args) => {
            return (await Item.findOne({
                name: args.name
            }))
        },
        itemById: async (parent, args) => {
            return (await Item.findById(args._id))
        }
    }   
}

module.exports = resolvers;