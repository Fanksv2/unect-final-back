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
        req.io.emit("create", {});
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
        req.io.emit("check");
        return res.json(updated);
    },
    async deleteTask(req, res){
        const {id} = req.body;
        await Task.findByIdAndDelete(id, (erro,docs) => {
            if(erro){
                console.log(erro);
                return res.sendStatus(500)
            }else{
                console.log(docs);
            }
        })
        req.io.emit("delete");
        return res.sendStatus(200);
    },
    async updateTask(req, res) {
        const {data} = req.body;
        const {id} = data;
        const {newText} = data;
        const updated = await Task.findByIdAndUpdate(id, {
            "content.text": newText
        },
        {
            new : true
        })
        return res.json(updated);
    }
};