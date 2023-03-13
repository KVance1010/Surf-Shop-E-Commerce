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
                console.log(userData)
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
            return (await Item.findById(args._id))
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
                itemQuantities: args.itemQuantities
            })
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