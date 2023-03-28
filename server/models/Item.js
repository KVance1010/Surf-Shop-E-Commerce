
const { Schema, model } = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
const { v4: uuidv4 } = require('uuid');

const itemSchema = new Schema ({
   
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    tags: {
        type: [String]
    },
    image: {
        type: String
    },
    stock: {
        type: Number
    },
    brand: {
        type: String
    },
    bestSeller: {
        type: Boolean,
        default: false
    },
    saleItem: {
        type: Boolean,
        default: false
    },
    newArrival: {
        type: Boolean,
        default: false
    },
    uuid: {
        type: String,
        unique: true,
        trim: true,
        default: uuidv4
      },
})

itemSchema.plugin(uniqueValidator);
const Item = model('Item', itemSchema)

module.exports = Item