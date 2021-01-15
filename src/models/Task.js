const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    content: {
        type: Map,
        of: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Task", taskSchema);