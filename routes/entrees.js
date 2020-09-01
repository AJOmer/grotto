const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const config = require("config");

const Entrees = require("../models/Entrees");

// @route   GET api/entrees
// @desc    Get all the entrees
// @access  Public
router.get("/", async(req, res) => {
    try {
        const allEntrees = await Entrees.find();
        console.log("entrees route check");
        res.json(allEntrees);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// @route   POST api/entrees
// @desc    Add or update entree
// @access  Public
router.post(
    "/", [
        check("name", "Entree name required").not().isEmpty(),
        check("description", "Describe the dish!").not().isEmpty(),
        check("price", "Price of the Dish").not().isEmpty(),
    ],
    async(req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, description, price } = req.body;

        const entreesField = {};
        if (name) entreesField.name = name;
        if (description) entreesField.description = description;
        if (price) entreesField.price = price;

        try {
            let entree = await Entrees.findOne({ name });
            if (entree) {
                console.log("exists already!");
                return res.status(400).json({ errors: [{ msg: "Already exists" }] });
            }
            let newEntree = new Entrees(entreesField);
            await newEntree.save();
            console.log("New entree added");
            res.json({ msg: "Successfully added entree" });
        } catch (err) {
            console.error(err.message);
            console.log("Cannot add entree");
            res.status(500).send("server error");
        }
    }
);

module.exports = router;