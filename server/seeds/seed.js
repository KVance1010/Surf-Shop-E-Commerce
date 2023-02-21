const db = require('../config/connection')
const { User } = require('../models')
const Item = require('../models/Item')
const userSeeds = require('./userSeed.json')
const inventorySeed = require('./inventorySeed.json')

db.once('open', async () => {
    try{
        await User.deleteMany({})
        await User.create(userSeeds)
        await Item.deleteMany({})
        await Item.create(inventorySeed)
        console.log('data seeded!')
        process.exit(0)
    }catch(err){
        throw(err)
    }
})