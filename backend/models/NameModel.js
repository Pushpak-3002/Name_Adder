const mongoose = require('mongoose');

const nameSchema = new mongoose.Schema({
    text: { type: String, required: true }
});

module.exports = mongoose.model('Name', nameSchema);
