const mongoose = require("mongoose");

const Hospital = mongoose.model(
    "Hospital",
    new mongoose.Schema({
        hospName: String,
        hospLocation: String,
        hospURL: String,
    })
)

module.exports = Hospital;