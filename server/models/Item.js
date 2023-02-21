const { Schema, model } = require('mongoose')

const itemSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String
    },
    tags: {
        type: [String]
    },
    image: {
        type: String
    }
})

const Item = model('Item', itemSchema)

module.exports = Item