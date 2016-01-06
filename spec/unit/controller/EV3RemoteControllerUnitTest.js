describe("EV3RemoteController Unit Test suite: ", function () {
    var ev3RemoteController;
    var ev3DifferentialPilotAdapterService;
    beforeEach(angular.mock.module('binarisEV3DifferentialPilot'));
    beforeEach(function () {
        angular.mock.inject(function ($controller, EV3DifferentialPilotRestClient) {
            ev3DifferentialPilotAdapterService = EV3DifferentialPilotRestClient;
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
        spyOn(ev3DifferentialPilotAdapterService, 'run');
        ev3RemoteController.run(10);
        expect(ev3DifferentialPilotAdapterService.run).toHaveBeenCalledWith(10);
    });
    it("robot should rotate", function () {
        spyOn(ev3DifferentialPilotAdapterService, 'rotate');
        ev3RemoteController.rotate(45);
        expect(ev3DifferentialPilotAdapterService.rotate).toHaveBeenCalledWith(45);
    });
    it("robot should beep", function () {
        spyOn(ev3DifferentialPilotAdapterService, 'beep');
        ev3RemoteController.beep();
        expect(ev3DifferentialPilotAdapterService.beep).toHaveBeenCalled();
    });
    it("robot should buzz", function () {
        spyOn(ev3DifferentialPilotAdapterService, 'buzz');
        ev3RemoteController.buzz();
        expect(ev3DifferentialPilotAdapterService.buzz).toHaveBeenCalled();
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