const { text } = require('body-parser');
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
    async fetchTodoTask(req, res) {
        const task = await Task.find({'content.status':'todo'}).sort('-createdAt');
        return res.json(task);
    },
    async fetchDoneTask(req, res) {
        const task = await Task.find({'content.status':'done'}).sort('-createdAt');
        return res.json(task);
    },
    async checkTask(req, res){
        const {data} = req.body;
        const {id} = data;
        const updated = await Task.findByIdAndUpdate(id, {
            "content.status" : "done"
        },
        {
            new : true
        })
        return res.json(updated);
    }
};