const express = require('express');
const ListController = require('./controller/ListController');

const router = express.Router();

router.post("/create", ListController.create);

module.exports = router;

