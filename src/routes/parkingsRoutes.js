const express = require('express');
const router = express.Router();


const parkingController = require('../controllers/parkingsControllers');


//Get all
router.get('/parking', parkingController.getAll);
//Get id
router.get('/parking/:id', parkingController.getId);
//Create new registry
router.post('/parking', parkingController.Create);
//Update a registry through id
router.put('/parking/:id', parkingController.Update);
//Delete a registry through id
router.delete('/parking/:id', parkingController.Delete);


module.exports = router;