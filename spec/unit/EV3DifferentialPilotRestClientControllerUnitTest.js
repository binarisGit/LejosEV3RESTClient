describe("EV3DifferntialPilotRestClientController Unit Test suite: ", function () {
    var ev3DifferentialPilotRestClientController;
    var ev3DifferentialPilotRestClient;
    beforeEach(angular.mock.module('binarisEV3DifferentialPilot'));
    beforeEach(function () {
        angular.mock.inject(function ($controller, EV3DifferentialPilotRestClient) {
            ev3DifferentialPilotRestClient = EV3DifferentialPilotRestClient;
            ev3DifferentialPilotRestClientController = $controller('EV3DifferentialPilotRestClientController', {
                $scope: {},
                EV3DifferentialPilotRestClient: EV3DifferentialPilotRestClient
            });
        });
    });
    it("should have all the properties that constitute a controller", function () {
        expect(ev3DifferentialPilotRestClientController.run).toBeDefined();
        expect(ev3DifferentialPilotRestClientController.rotate).toBeDefined();
        expect(ev3DifferentialPilotRestClientController.beep).toBeDefined();
        expect(ev3DifferentialPilotRestClientController.buzz).toBeDefined();
    });
    it("robot should run", function () {
        spyOn(ev3DifferentialPilotRestClient, 'run');
        ev3DifferentialPilotRestClientController.run(10);
        expect(ev3DifferentialPilotRestClient.run).toHaveBeenCalledWith(10);
    });
    it("robot should rotate", function () {
        spyOn(ev3DifferentialPilotRestClient, 'rotate');
        ev3DifferentialPilotRestClientController.rotate(45);
        expect(ev3DifferentialPilotRestClient.rotate).toHaveBeenCalledWith(45);
    });
    it("robot should beep", function () {
        spyOn(ev3DifferentialPilotRestClient, 'beep');
        ev3DifferentialPilotRestClientController.beep();
        expect(ev3DifferentialPilotRestClient.beep).toHaveBeenCalled();
    });
    it("robot should buzz", function () {
        spyOn(ev3DifferentialPilotRestClient, 'buzz');
        ev3DifferentialPilotRestClientController.buzz();
        expect(ev3DifferentialPilotRestClient.buzz).toHaveBeenCalled();
    });
});
//# sourceMappingURL=EV3DifferentialPilotRestClientControllerUnitTest.js.map