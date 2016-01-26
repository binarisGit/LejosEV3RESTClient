describe("Color Adapter Integration test suite with asynchronous HTTP Requests: ", function () {
    var ev3ColorAdapterService;
    beforeEach(function () {
        var $injector = angular.injector(['ng', 'binarisEV3DifferentialPilot']);
        ev3ColorAdapterService = $injector.get("EV3ColorAdapterService");
    });
    it("should perform a REAL http-Request to the 'getcolor'-endpoint", function (done) {
        var promise = ev3ColorAdapterService.getColor();
        promise.then(function successCallback(response) {
            expect(response.status).toBe(200);
            done();
        });
    });
});
