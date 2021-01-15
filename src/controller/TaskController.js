const List = require('../models/Task');

module.exports = {
    async create(req, res){
        const {data} = req.body;
        const {content, status} = data;
        
        const task = await Task.create({
            content: {
                content,
                status
            }
        });

        return res.json(task);
    }
};