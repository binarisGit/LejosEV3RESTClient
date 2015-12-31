describe("EV3RemoteController Unit Test suite: ", function () {

    // SUT
    var ev3RemoteController: any;

    // DOC
    var ev3DifferentialPilotRestClient: BinarisEV3.IDifferentialPilotRestClient;

    beforeEach(angular.mock.module('binarisEV3DifferentialPilot'));

    beforeEach(function () {
        angular.mock.inject(function ($controller: ng.IControllerService, EV3DifferentialPilotRestClient: IDifferentialPilotRestClient) {
            ev3DifferentialPilotRestClient = EV3DifferentialPilotRestClient;

            ev3RemoteController = $controller('EV3RemoteController', {
                $scope: {},
                EV3DifferentialPilotRestClient: EV3DifferentialPilotRestClient
            });
        });
    });

    it("should have all the properties that constitute a controller", function () {
        expect(ev3RemoteController.run).toBeDefined();
        expect(ev3RemoteController.rotate).toBeDefined();
        expect(ev3RemoteController.beep).toBeDefined();
        expect(ev3RemoteController.buzz).toBeDefined();
    });

    it("robot should run", function () {
        spyOn(ev3DifferentialPilotRestClient, 'run');
        ev3RemoteController.run(10);
        expect(ev3DifferentialPilotRestClient.run).toHaveBeenCalledWith(10);
    });

    it("robot should rotate", function () {
        spyOn(ev3DifferentialPilotRestClient, 'rotate');
        ev3RemoteController.rotate(45);
        expect(ev3DifferentialPilotRestClient.rotate).toHaveBeenCalledWith(45);
    });

    it("robot should beep", function () {
        spyOn(ev3DifferentialPilotRestClient, 'beep');
        ev3RemoteController.beep();
        expect(ev3DifferentialPilotRestClient.beep).toHaveBeenCalled();
    });

    it("robot should buzz", function () {
        spyOn(ev3DifferentialPilotRestClient, 'buzz');
        ev3RemoteController.buzz();
        expect(ev3DifferentialPilotRestClient.buzz).toHaveBeenCalled();
    });

    it('action list should contain a single element after adding an action', function () {
        ev3RemoteController.addAction('laufen');
        expect(ev3RemoteController.getNumberOfActions()).toBe(1);
    });
    it('action list should contain two elements after adding two actions', function () {
        ev3RemoteController.addAction('laufen');
        ev3RemoteController.addAction('linksDrehen');
        expect(ev3RemoteController.getNumberOfActions()).toBe(2);
    });

});