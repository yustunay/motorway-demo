const moment = require("moment");
const vehicleService = require("../services/vehicleService");
const logger = require("../utils/logger");
const VehicleServiceException = require("../exceptions/vehicleServiceException");

async function getVehicleState(req, res) {
  const { vehicleId, timestamp } = req.params;

  const parsedTimestamp = moment.utc(timestamp);

  try {
    const state = await vehicleService.getVehicleState(
      vehicleId,
      parsedTimestamp
    );

    if (state === null) {
      res.status(404).json({ error: "Vehicle state not found" });
    } else {
      res.json({ state });
    }
  } catch (error) {
    if (error instanceof VehicleServiceException) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  getVehicleState,
};
