describe("EV3SoundAdapterService Integration test suite with asynchronous HTTP Requests: ", function () {
    var ev3SoundAdapterService;
    beforeEach(function () {
        var $injector = angular.injector(['ng', 'binarisEV3DifferentialPilot']);
        ev3SoundAdapterService = $injector.get("EV3SoundAdapterService");
    });
    it("should perform a REAL http-Request to the 'buzz'-endpoint", function (done) {
        ev3SoundAdapterService.buzz().then(function (response) {
            expect(response.status).toBe(204);
            done();
        });
    });
    it("should perform a REAL http-Request to the 'beep'-endpoint", function (done) {
        ev3SoundAdapterService.beep().then(function (response) {
            expect(response.status).toBe(204);
            done();
        });
    });
});
