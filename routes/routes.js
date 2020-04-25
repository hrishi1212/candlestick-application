const express = require('express');
const router = express.Router();

const GraphController = require('../controllers/graphs.controller');

// register controllers
const graphController = new GraphController();
graphController.register(router);


module.exports = router;
