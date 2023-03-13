const { Schema, model } = require('mongoose')

const orderSchema = new Schema ({
    email: {
        type: String,
        required: true
    },
    itemNames: {
        type: Array
    },
    itemPrices: {
        type: Array
    },
    itemQuantities: {
        type: Array
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

const Order = model('Order', orderSchema)

module.exports = Order