// Using express-promise-router instead of express built in router, since this one
//automatically implements try catch
const expressPromiseRouter = require("express-promise-router");
const router = expressPromiseRouter();

// const express = require("express");
// const router = express.Router();

// Declaring controller object
const CoffeesController = require("../controllers/coffees"); 

router.route("/")
    .get(CoffeesController.index)
    .post(CoffeesController.newCoffee);

router.route("/:coffeeId")
    .get(CoffeesController.getCoffee)
    .put(CoffeesController.replaceCoffee)
    .patch(CoffeesController.updateCoffee);
    //.delete();

module.exports = router;