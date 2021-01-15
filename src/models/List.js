const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    todo: [String],
    done: [String]
}, {
    timestamps: true
});

module.exports = mongoose.model("List", ListSchema);