/*
 WICHTIG:
 Aufgrund der "Same Origin Policy" sind HTTP-Requests auf fremde URLs nur dann erfolgreich,
 wenn im verwendeten Test-Browser ein "Cross-Origin Resource Sharing"-Plugin installiert ist.

 Chrome Plugin: "Allow-Control-Allow-Origin" (im Chrome Web Store)

 Links:
 https://de.wikipedia.org/wiki/Same-Origin-Policy
 https://de.wikipedia.org/wiki/Cross-Origin_Resource_Sharing

 */
describe("EV3DifferentialPilotRestClientController Integration test suite: ", function () {
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
    it("should perform a REAL http-Request to the 'run'-endpoint", function () {
        spyOn(ev3DifferentialPilotRestClient, 'run').and.callThrough();
        ev3DifferentialPilotRestClientController.run(10);
        expect(ev3DifferentialPilotRestClient.run).toHaveBeenCalledWith(10);
    });
    it("should perform a REAL http-Request to the 'rotate'-endpoint", function () {
        spyOn(ev3DifferentialPilotRestClient, 'rotate').and.callThrough();
        ev3DifferentialPilotRestClientController.rotate(45);
        expect(ev3DifferentialPilotRestClient.rotate).toHaveBeenCalledWith(45);
    });
    it("should perform a REAL http-Request to the 'buzz'-endpoint", function () {
        spyOn(ev3DifferentialPilotRestClient, 'buzz').and.callThrough();
        ev3DifferentialPilotRestClientController.buzz();
        expect(ev3DifferentialPilotRestClient.buzz).toHaveBeenCalled();
    });
    it("should perform a REAL http-Request to the 'beep'-endpoint", function () {
        spyOn(ev3DifferentialPilotRestClient, 'beep').and.callThrough();
        ev3DifferentialPilotRestClientController.beep();
        expect(ev3DifferentialPilotRestClient.beep).toHaveBeenCalled();
    });
});
//# sourceMappingURL=EV3DifferentialPilotRestClientControllerIntegrationTest.js.map