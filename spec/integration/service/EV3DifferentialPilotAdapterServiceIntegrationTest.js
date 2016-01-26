describe("Integration test suite with asynchronous HTTP Requests: ", function () {
    var ev3DifferentialPilotAdapterService;
    beforeEach(function () {
        var $injector = angular.injector(['ng', 'binarisEV3DifferentialPilot']);
        ev3DifferentialPilotAdapterService = $injector.get("EV3DifferentialPilotAdapterService");
    });
    it("should perform a REAL http-Request to the 'run'-endpoint", function (done) {
        ev3DifferentialPilotAdapterService.run(10).then(function successCallback(response) {
            expect(response.status).toBe(204);
            done();
        });
    });
    it("should perform a REAL http-Request to the 'rotation'-endpoint", function (done) {
        ev3DifferentialPilotAdapterService.rotate(45).then(function successCallback(response) {
            expect(response.status).toBe(204);
            done();
        });
    });
    it("should perform a REAL http-Request to the 'stop'-endpoint", function (done) {
        ev3DifferentialPilotAdapterService.stop().then(function successCallback(response) {
            expect(response.status).toBe(204);
            done();
        });
    });
    it("should perform a REAL http-Request to the 'quickStop'-endpoint", function (done) {
        ev3DifferentialPilotAdapterService.stop().then(function successCallback(response) {
            expect(response.status).toBe(204);
            done();
        });
    });
    it("should perform a REAL http-Request to the 'getMovementIncrement'-endpoint", function (done) {
        ev3DifferentialPilotAdapterService.run(10).then(function successCallback(response) {
            return ev3DifferentialPilotAdapterService.getMovementIncrement();
        }).then(function successCallback(response) {
            expect(response.data).toBeCloseTo(5, 1.0);
            expect(response.status).toBe(200);
            done();
        });
    });
});
