const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coffeeSchema = new Schema({
    name: String,
    origin: String,
    roast: String,
    notes: String,
    brand: { 
        type: Schema.Types.ObjectId, ref: 'brand'
    },
    ratingsByMethod: [{
        brewingMethod: { 
            type: Schema.Types.ObjectId, ref: 'brewingMethod' 
        },
        rating: String
    }]
});

const Coffee = mongoose.model('coffee', coffeeSchema);
module.exports = Coffee;