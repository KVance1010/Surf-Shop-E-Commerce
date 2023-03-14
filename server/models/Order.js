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
        itemImages: {
            type: Array
        },
        createdAt: {
            type: Number
        }

    },
    {
        toJSON: {
            virtuals: true,
        } 
    }
)

orderSchema
    .virtual('total')
    .get(function() {
        let total =0
        for(let i = 0; i < this.itemPrices.length; i++){
            total += this.itemPrices[i] * this.itemQuantities[i]
        }
        return total
    })

const Order = model('Order', orderSchema)

module.exports = Order