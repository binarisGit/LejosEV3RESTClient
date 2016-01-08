describe("EV3RemoteController Integration test suite: ", function () {
    var ev3RemoteController;
    var ev3DifferentialPilotAdapterService;
    beforeEach(angular.mock.module('binarisEV3DifferentialPilot'));
    beforeEach(function () {
        angular.mock.inject(function ($controller, $q, EV3DifferentialPilotAdapterService) {
            ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
            ev3RemoteController = $controller('EV3RemoteController', {
                $scope: {},
                EV3DifferentialPilotAdapterService: EV3DifferentialPilotAdapterService
            });
        });
    });
    it("should get a promise from run", function () {
        spyOn(ev3DifferentialPilotAdapterService, 'run').and.callThrough();
        var promise = ev3RemoteController.run(10);
        expect(promise.then).toBeDefined();
        expect(ev3DifferentialPilotAdapterService.run).toHaveBeenCalledWith(10);
    });
    it("should get a promise from rotate", function () {
        spyOn(ev3DifferentialPilotAdapterService, 'rotate').and.callThrough();
        var promise = ev3RemoteController.rotate(45);
        expect(promise.then).toBeDefined();
        expect(ev3DifferentialPilotAdapterService.rotate).toHaveBeenCalledWith(45);
    });
});
