const mongoose = require('mongoose');

const orchidSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isSpecies: {
        type: Boolean,
        required: false
    },
    isHybrid: {
        type: Boolean,
        required: false
    },
    distribution: {
        type: String,
        required: true
    },
    temperature: {
        type: String,
        required: true
    },
    light: {
        type: String,
        required: true
    },
    waterAndHumid: {
        type: String,
        required: true
    },
    fertilizer: {
        type: String,
        required: true
    },
    potting: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('orchids', orchidSchema)