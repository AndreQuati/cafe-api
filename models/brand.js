const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brandSchema = new Schema({
    name: String,
    shopLocation: String,
    website: String,
    coffees: [{
        type: Schema.Types.ObjectId,
        ref: 'coffee'
    }]
});

const Brand = mongoose.model('brand', brandSchema);
module.exports = Brand;