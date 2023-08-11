const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../src/app");
const sinon = require("sinon");
const pool = require("../src/db/postgres");
const vehicleService = require("../src/services/vehicleService");

chai.use(chaiHttp);
const expect = chai.expect;

describe("Vehicle API", () => {
  describe("GET /vehicles/:vehicleId/:timestamp", () => {
    it("should return vehicle state for a valid request", (done) => {
      const vehicleId = 3;
      const timestamp = "2022-09-12T10:00:00Z";

      chai
        .request(app)
        .get(`/vehicles/${vehicleId}/${timestamp}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property("state");
          expect(res.body.state).to.equal("selling");
          done();
        });
    });

    it("should return 404 for non-existing vehicle state", (done) => {
      const vehicleId = 4;
      const timestamp = "2022-09-12T10:00:00Z";

      chai
        .request(app)
        .get(`/vehicles/${vehicleId}/${timestamp}`)
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body).to.have.property("error", "Vehicle state not found");
          done();
        });
    });

    it("should return 500 for database exception", (done) => {
      const vehicleId = 20;
      const timestamp = "2022-09-12T10:00:00Z";

      // Stub the query function to throw an exception
      const queryStub = sinon
        .stub(pool, "query")
        .throws(new Error("Database error"));

      chai
        .request(app)
        .get(`/vehicles/${vehicleId}/${timestamp}`)
        .end((err, res) => {
          expect(res).to.have.status(500);
          expect(res.body).to.have.property("error", "Database error");

          // Restore the original behavior of the query function
          queryStub.restore();

          done();
        });
    });
  });
});
