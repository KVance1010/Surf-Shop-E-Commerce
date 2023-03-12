const db = require('../config/connection')
const { User, Item, Order } = require('../models')

const userSeeds = require('./userSeed.json')
const inventorySeed = require('./inventorySeed.json')
const orderSeed = require('./orderSeed.json')

db.once('open', async () => {
    try{
        await User.deleteMany({})
        await User.create(userSeeds)

        await Item.deleteMany({})
        await Item.create(inventorySeed)

        await Order.deleteMany({})
        await Order.create(orderSeed)
        console.log('data seeded!')
        process.exit(0)
    }catch(err){
        throw(err)
    }
})