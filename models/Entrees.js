const mongoose = require("mongoose");

const EntreeSchema = new mongoose.Schema({
    name: {
        type: string,
        required: true,
    },
    description: {
        type: string,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

module.exports = Entrees = mongoose.model("entrees", EntreeSchema);