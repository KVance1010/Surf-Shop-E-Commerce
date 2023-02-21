const db = require('../config/connection')
const { User } = require('../models')
const userSeeds = require('./userSeed.json')

db.once('open', async () => {
    try{
        await User.deleteMany({})
        await User.create(userSeeds)

        console.log('data seeded!')
        process.exit(0)
    }catch(err){
        throw(err)
    }
})