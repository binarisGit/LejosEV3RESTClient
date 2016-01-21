import IPromise = angular.IPromise;
describe("BaseBallAktionen Integration test suite: ", function () {

    // SUT
    var baseBallAktionenService: any;

    // DOC
    var ev3DifferentialPilotAdapterService: any;
    var ev3SoundAdapterService: any;
    var ev3ColorAdapterService: any;

    beforeEach(angular.mock.module('binarisEV3DifferentialPilot'));

    beforeEach(function () {
        var $injector = angular.injector(['ng', 'binarisEV3DifferentialPilot']);
        ev3DifferentialPilotAdapterService = $injector.get('EV3DifferentialPilotAdapterService');
        ev3SoundAdapterService = $injector.get("EV3SoundAdapterService");
        ev3ColorAdapterService = $injector.get("EV3ColorAdapterService");
        baseBallAktionenService = new BinarisEV3.BaseBallAktionenService(ev3DifferentialPilotAdapterService, ev3SoundAdapterService, ev3ColorAdapterService);
    });

    it("es wird ein zustimmendes handzeichen ausgeführt", function (done) {
        baseBallAktionenService.gibtZustimmendesHandzeichen().then((response: any)=> {
            expect(response.status).toBe(200);
            done();
        });
    });

    it("es wird ein ablehnendes handzeichen ausgeführt", function (done) {
        baseBallAktionenService.gibtAblehnendesHandzeichen().then((response: any)=> {
            expect(response.status).toBe(200);
            done();
        });
    });

    it("schaut weiße base an", function (done) {
        baseBallAktionenService.schaueBaseAn().then((response: any)=> {
            expect(response.data.color).toBe(6);
            expect(response.status).toBe(200);
            done();
        });
    });

});