const mongoose = require("mongoose");

const EntreeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

module.exports = Entrees = mongoose.model("entrees", EntreeSchema);