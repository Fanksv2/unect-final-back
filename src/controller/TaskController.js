const Task = require('../models/Task');

module.exports = {
    async create(req, res){
        const {data} = req.body;
        const {text, status} = data;
        
        const task = await Task.create({
            content: {
                text,
                status
            }
        });

        return res.json(task);
    },
    async fetchTask(req, res) {
        const task = await Task.find({'content.status':'todo'}).sort('-createdAt');
        return res.json(task);
    }
};