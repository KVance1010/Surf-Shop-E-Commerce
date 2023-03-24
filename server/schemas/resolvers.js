const { AuthenticationError } = require('apollo-server-express')
const { User, Item, Order } = require('../models')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        users:  async () => {
            return await User.find()
        },
        user: async (parent, args) => {
            return User.findOne({email: args.email})
        },
        me: async (parent, args, context) => {
            if(context.user){
                const userData = User.findOne({_id: context.user._id})
                return userData
            }
            throw new AuthenticationError('you are not logged in!')
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
            return Item.findOne({_id: args.id})
        },
        itemByUUID: async (parent, args) => {
            return await Item.findOne({
                uuid: args.uuid
            })
        },
        ordersByEmail: async (parent, args) => {
            return (await Order.find({
                email: args.email
            }))
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create({
                firstName: args.firstName,
                lastName: args.lastName,
                email: args.email,
                password: args.password
            });
            const token = signToken(user);
            return { token, user }
        },
        addOrder: async (parent, args) => {
            const order = await Order.create({
                email: args.email,
                itemNames: args.itemNames,
                itemPrices: args.itemPrices,
                itemQuantities: args.itemQuantities,
                createdAt: args.createdAt,
                itemImages: args.itemImages
            })
        },
        deleteOrder: async (parent, args) => {
            const deletedOrder = await Order.findOneAndDelete({
                _id: args.id
            })
        },
        addItem: async (parent, args) => {
      
            const item = await Item.create({
                name: args.name,
                price: args.price,
                description: args.description,
                tags: args.tags,
                image: args.image,
                stock: args.stock,
                brand: args.brand,
                bestSeller: args.bestSeller,
                saleItem: args.saleItem,
                newArrival: args.newArrival
            })
            return item
        },
        updateItem: async (parent, args) => {
            const item = await Item.findOne({
                uuid: args.uuid
            })
            return (await item.update(
                {...args},
            ))
        },
        deleteItem: async (parent, args) => {
            const deletedItem = await Item.deleteOne({
                uuid: args.uuid
            })
        },
        updateStocksByNames: async (parent, args) => {
            for(let i = 0; i < args.names.length; i ++){
                const updatedItem = await Item.findOneAndUpdate(
                    {name: args.names[i]},
                    {stock: args.stocks[i]},
                    {new: true}
                )
            }
        },
        login: async (parent, args) => {
            const user = await User.findOne({email: args.email})
            if(!user) {
                throw new AuthenticationError('no user found with this email address')
            }

            const correctPw = await user.isCorrectPassword(args.password)

            if(!correctPw) {
                throw new AuthenticationError('Incorrect credentials')
            }

            const token = signToken(user);

            return { token, user }
        }
    }  
}

module.exports = resolvers;