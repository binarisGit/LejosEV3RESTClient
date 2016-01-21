describe("EV3RemoteController Integration test suite: ", function () {
    var ev3RemoteController;
    var ev3DifferentialPilotAdapterService;
    beforeEach(angular.mock.module('binarisEV3DifferentialPilot'));
    beforeEach(function () {
        var $injector = angular.injector(['ng', 'binarisEV3DifferentialPilot']);
        var $controller = $injector.get("$controller");
        ev3DifferentialPilotAdapterService = $injector.get("EV3DifferentialPilotAdapterService");
        ev3RemoteController = $controller('EV3RemoteController', {
            $scope: {},
            EV3DifferentialPilotAdapterService: ev3DifferentialPilotAdapterService
        });
    });
    it("should run 10 m", function (done) {
        ev3DifferentialPilotAdapterService.run(10).then(function (response) {
            expect(response.status).toBe(200);
            done();
        });
    });
    it("should get a promise from rotate", function (done) {
        ev3DifferentialPilotAdapterService.rotate(45).then(function (response) {
            expect(response.status).toBe(200);
            done();
        });
    });
});
