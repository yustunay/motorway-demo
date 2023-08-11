class VehicleServiceException extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode || 500;
  }
}

module.exports = VehicleServiceException;
