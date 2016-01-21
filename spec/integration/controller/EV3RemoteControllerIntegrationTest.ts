describe("EV3RemoteController Integration test suite: ", function () {

    // SUT
    var ev3RemoteController: any;

    // DOC
    var ev3DifferentialPilotAdapterService: any;

    beforeEach(angular.mock.module('binarisEV3DifferentialPilot'));

    beforeEach(()=> {
        var $injector = angular.injector(['ng', 'binarisEV3DifferentialPilot']);
        var $controller: any = $injector.get("$controller");
        ev3DifferentialPilotAdapterService = $injector.get("EV3DifferentialPilotAdapterService");

        ev3RemoteController = $controller('EV3RemoteController', {
            $scope: {},
            EV3DifferentialPilotAdapterService: ev3DifferentialPilotAdapterService
        });
    });

    it("should run 10 m", (done) => {
        ev3DifferentialPilotAdapterService.run(10).then((response: any)=> {
            expect(response.status).toBe(200);
            done();
        });
    });

    it("should get a promise from rotate", (done) => {
        ev3DifferentialPilotAdapterService.rotate(45).then((response: any)=> {
            expect(response.status).toBe(200);
            done();
        });
    });

});