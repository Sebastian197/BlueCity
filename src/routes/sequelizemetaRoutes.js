const express = require('express');
const router = express.Router();


const sequelizemetaController = require('../controllers/sequelizemetaControllers');


//Get all
router.get('/sequelizemeta', sequelizemetaController.getAll);


module.exports = router;