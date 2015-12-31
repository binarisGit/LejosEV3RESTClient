describe("EV3RemoteController Integration test suite: ", function () {

    // SUT
    var ev3RemoteController: any;

    // DOC
    var ev3DifferentialPilotRestClient: BinarisEV3.IDifferentialPilotAdapterService;

    beforeEach(angular.mock.module('binarisEV3DifferentialPilot'));

    beforeEach(function () {
        angular.mock.inject(function ($controller: ng.IControllerService, $q: any, EV3DifferentialPilotRestClient: IDifferentialPilotRestClient) {
            ev3DifferentialPilotRestClient = EV3DifferentialPilotRestClient;

            ev3RemoteController = $controller('EV3RemoteController', {
                $scope: {},
                EV3DifferentialPilotRestClient: EV3DifferentialPilotRestClient
            });

        });
    });

    it("should get a promise from run", function () {
        spyOn(ev3DifferentialPilotRestClient, 'run').and.callThrough();

        var promise = ev3RemoteController.run(10);

        expect(promise.then).toBeDefined();
        expect(ev3DifferentialPilotRestClient.run).toHaveBeenCalledWith(10);

    });
    it("should get a promise from rotate", function () {
        spyOn(ev3DifferentialPilotRestClient, 'rotate').and.callThrough();

        var promise = ev3RemoteController.rotate(45);

        expect(promise.then).toBeDefined();
        expect(ev3DifferentialPilotRestClient.rotate).toHaveBeenCalledWith(45);
    });
    it("should get a promise from buzz", function () {
        spyOn(ev3DifferentialPilotRestClient, 'buzz').and.callThrough();

        var promise = ev3RemoteController.buzz();

        expect(promise.then).toBeDefined();
        expect(ev3DifferentialPilotRestClient.buzz).toHaveBeenCalled();
    });
    it("should get a promise from beep", function () {
        spyOn(ev3DifferentialPilotRestClient, 'beep').and.callThrough();

        var promise = ev3RemoteController.beep();

        expect(promise.then).toBeDefined();
        expect(ev3DifferentialPilotRestClient.beep).toHaveBeenCalled();
    });

});