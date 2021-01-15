const List = require('../models/List');

module.exports = {
    async create(req, res){
        const {data} = req.body;
        const {todo, done} = data;
        
        const list = await List.create({
            todo,
            done
        });

        return res.json(list);
    }
};