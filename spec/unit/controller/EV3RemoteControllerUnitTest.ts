import IDifferentialPilotAdapterService = require("../../../src/third_apis/IDifferentialPilotAdapterService");
import ISoundAdapterService = require("../../../src/third_apis/ISoundAdapterService");
describe("EV3RemoteController Unit Test suite: ", () => {

    // SUT
    var ev3RemoteController: any;

    // DOC
    var ev3DifferentialPilotAdapterService: IDifferentialPilotAdapterService;
    var ev3SoundAdapterService: ISoundAdapterService;

    beforeEach(angular.mock.module('binarisEV3DifferentialPilot'));

    beforeEach(() => {
        angular.mock.inject(function ($controller: ng.IControllerService, EV3DifferentialPilotAdapterService: IDifferentialPilotAdapterService, EV3SoundAdapterService: ISoundAdapterService) {
            ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
            ev3SoundAdapterService = EV3SoundAdapterService;

            ev3RemoteController = $controller('EV3RemoteController', {
                $scope: {},
                EV3DifferentialPilotAdapterService: EV3DifferentialPilotAdapterService,
                EV3SoundAdapterService: EV3SoundAdapterService
            });
        });
    });

    it("should have all the properties that constitute a controller", () => {
        expect(ev3RemoteController.run).toBeDefined();
        expect(ev3RemoteController.rotate).toBeDefined();
        expect(ev3RemoteController.beep).toBeDefined();
        expect(ev3RemoteController.buzz).toBeDefined();

    });

    it("robot should run 10", () => {
        spyOn(ev3DifferentialPilotAdapterService, 'run');
        ev3RemoteController.run(10);
        expect(ev3DifferentialPilotAdapterService.run).toHaveBeenCalledWith(10);
    });

    it("robot should rotate right 45 degrees", () => {
        spyOn(ev3DifferentialPilotAdapterService, 'rotate');
        ev3RemoteController.rotate(45);
        expect(ev3DifferentialPilotAdapterService.rotate).toHaveBeenCalledWith(45);
    });

});