const NodeCache = require("node-cache");
const pool = require("../db/postgres");
const logger = require("../utils/logger");
const VehicleServiceException = require("../exceptions/vehicleServiceException");
const { query } = require("../db/scripts");

const cache = new NodeCache({ stdTTL: 60 }); // Cache TTL set to 60 seconds

async function getVehicleState(vehicleId, timestamp) {
  const cacheKey = `${vehicleId}-${timestamp.toISOString()}`;

  // Try to get the response from cache
  const cachedResponse = cache.get(cacheKey);
  if (cachedResponse !== undefined) {
    logger.debug(`Returning from cache for key ${cacheKey}`);
    return cachedResponse;
  } else {
    logger.debug(`Returning from database for key ${cacheKey}`);
  }

  let client;
  try {
    client = await pool.connect();
    const result = await pool.query(
      query.GET_STATE_WITH_VEHICLE_ID_AND_TIMESTAMP,
      [vehicleId, timestamp]
    );
    const state = result.rows[0]?.state || null;

    // Cache the response
    cache.set(cacheKey, state);
    return state;
  } catch (error) {
    throw new VehicleServiceException(error.message, 500);
  } finally {
    if (client) {
      client.release();
    }
  }
}

module.exports = {
  getVehicleState,
};
