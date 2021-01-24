const express = require('express');
const TaskController = require('./controller/TaskController');

const router = express.Router();

router.post("/create", TaskController.create);
router.get("/todo", TaskController.fetchTodoTask);
router.get("/done", TaskController.fetchDoneTask);

module.exports = router;
