const { AuthenticationError } = require('apollo-server-express')
const { User, Item } = require('../models')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        users:  async () => {
            return await User.find()
        },
        user: async (parent, args) => {
            return User.findOne({username: args.username})
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
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create({
                username: args.username,
                email: args.email,
                password: args.password
            });
            const token = signToken(user);
            return { token, user }
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