const express = require("express");
const router = express.Router();
const vehicleController = require("../controllers/vehicleController");

router.get("/:vehicleId/:timestamp", vehicleController.getVehicleState);

module.exports = router;
