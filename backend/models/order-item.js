const mongoose = require('mongoose');

const orderItemSchema = mongoose.Schema({
    user:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
});

const OrderItem = mongoose.model('OrderItem', orderItemSchema);
module.exports = OrderItem;
