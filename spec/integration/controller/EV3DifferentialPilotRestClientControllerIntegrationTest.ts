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

    // SUT
    var ev3DifferentialPilotRestClientController: any;

    // DOC
    var ev3DifferentialPilotRestClient: BinarisEV3.IDifferentialPilotRestClient;



    beforeEach(angular.mock.module('binarisEV3DifferentialPilot'));

    beforeEach(function () {
        angular.mock.inject(function ($controller: ng.IControllerService, $q: any, EV3DifferentialPilotRestClient: IDifferentialPilotRestClient) {
            ev3DifferentialPilotRestClient = EV3DifferentialPilotRestClient;

            ev3DifferentialPilotRestClientController = $controller('EV3DifferentialPilotRestClientController', {
                $scope: {},
                EV3DifferentialPilotRestClient: EV3DifferentialPilotRestClient
            });

        });
    });

    it("should get a promise from run", function () {
        spyOn(ev3DifferentialPilotRestClientController, 'run').and.callThrough();
        var promise = ev3DifferentialPilotRestClientController.run(10);

        expect(promise.then).toBeDefined();
        expect(ev3DifferentialPilotRestClientController.run).toHaveBeenCalledWith(10);

    });
    it("should get a promise from rotate", function () {
        spyOn(ev3DifferentialPilotRestClientController, 'rotate').and.callThrough();
        var promise = ev3DifferentialPilotRestClientController.rotate(45);

        expect(promise.then).toBeDefined();
        expect(ev3DifferentialPilotRestClientController.rotate).toHaveBeenCalledWith(45);
    });
    it("should get a promise from buzz", function () {
        spyOn(ev3DifferentialPilotRestClient, 'buzz').and.callThrough();
        var promise = ev3DifferentialPilotRestClientController.buzz();

        expect(promise.then).toBeDefined();
        expect(ev3DifferentialPilotRestClient.buzz).toHaveBeenCalled();
    });
    it("should get a promise from beep", function () {
        spyOn(ev3DifferentialPilotRestClient, 'beep').and.callThrough();
        var promise = ev3DifferentialPilotRestClientController.beep();

        expect(promise.then).toBeDefined();
        expect(ev3DifferentialPilotRestClient.beep).toHaveBeenCalled();
    });

});