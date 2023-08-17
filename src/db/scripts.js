const GET_STATE_WITH_VEHICLE_ID_AND_TIMESTAMP = `
SELECT "state"
FROM "stateLogs"
WHERE "vehicleId" = $1 AND "timestamp" <= $2
ORDER BY "timestamp" DESC
LIMIT 1;
`;

module.exports = {
  query: {
    GET_STATE_WITH_VEHICLE_ID_AND_TIMESTAMP,
  },
};
