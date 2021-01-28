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
        req.io.emit("createTask", {});
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
        req.io.emit("checkTask");
        return res.json(updated);
    },
    async deleteTask(req, res){
        const {id} = req.body;
        await Task.findByIdAndDelete(id, (erro,docs) => {
            if(erro){
                console.log(erro);
                return res.sendStatus(500)
            }
            if(docs){
                var {status} = docs.content;
                if(status == "todo"){
                    req.io.emit("deleteTodo");
                }else{
                    req.io.emit("deleteDone");
                }
            }  
        })
        return res.sendStatus(200);
    }
};