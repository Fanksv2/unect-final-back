const express = require('express');
const TaskController = require('./controller/TaskController');

const router = express.Router();

router.post("/create", TaskController.create);
router.get("/todo", TaskController.fetchTodoTask);
router.get("/done", TaskController.fetchDoneTask);
router.post("/check", TaskController.checkTask)
router.delete("/delete",TaskController.deleteTask);
router.patch("/update", TaskController.updateTask);
module.exports = router;
