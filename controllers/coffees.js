const Coffee = require("../models/coffee");

module.exports = {

    index: async function (req, res) {
        const coffess = await Coffee.find();
        res.json(coffess);
    },

    newCoffee: async function (req, res, next) {
        const newCoffee = new Coffee(req.body);
        await newCoffee.save();
        res.send("Sucessfully saved new coffee");
    },

    getCoffee: async function (req, res) {
        const coffeeId = req.params.coffeeId;
        const coffee = await Coffee.findById(coffeeId);
        res.json(coffee);
    },
    
    replaceCoffee: async function (req, res) {
        const coffeeId = req.params.coffeeId;
        const newCoffee = req.body;
        await Coffee.findByIdAndUpdate(coffeeId, newCoffee, {useFindAndModify:false});
        res.send("Sucessfully replaced coffee");
    },
    
    updateCoffee: async function (req, res) {
        const coffeeId = req.params.coffeeId;
        const newCoffee = req.body;
        const result = await Coffee.findByIdAndUpdate(coffeeId, newCoffee, {useFindAndModify:false});
        res.send("Sucessfully updated coffee");
    }
};