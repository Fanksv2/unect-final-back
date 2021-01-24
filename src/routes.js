const express = require('express');
const TaskController = require('./controller/TaskController');

const router = express.Router();

router.post("/create", TaskController.create);
router.get("/task", TaskController.fetchTask);

module.exports = router;

