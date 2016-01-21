describe("BaseBallAktionen Unit test suite: ", function () {
    var baseBallAktionenService;
    var ev3DifferentialPilotAdapterService;
    var ev3SoundAdapterService;
    var ev3ColorAdapterService;
    beforeEach(angular.mock.module('binarisEV3DifferentialPilot'));
    beforeEach(function () {
        angular.mock.inject(function ($injector, EV3DifferentialPilotAdapterService, EV3SoundAdapterService, EV3ColorAdapterService) {
            ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
            ev3SoundAdapterService = EV3SoundAdapterService;
            ev3ColorAdapterService = EV3ColorAdapterService;
            baseBallAktionenService = new BinarisEV3.BaseBallAktionenService(ev3DifferentialPilotAdapterService, ev3SoundAdapterService, ev3ColorAdapterService);
        });
    });
    it("es wird ein zustimmendes handzeichen ausgeführt", function () {
        spyOn(ev3SoundAdapterService, "beep").and.callThrough();
        var promise = baseBallAktionenService.gibtZustimmendesHandzeichen();
        expect(ev3SoundAdapterService.beep).toHaveBeenCalledTimes(1);
    });
    it("es wird ein ablehnendes handzeichen ausgeführt", function () {
        spyOn(ev3SoundAdapterService, "buzz");
        baseBallAktionenService.gibtAblehnendesHandzeichen();
        expect(ev3SoundAdapterService.buzz).toHaveBeenCalledTimes(1);
    });
    it("wird die base angeschaut", function () {
        spyOn(ev3ColorAdapterService, "getColor");
        baseBallAktionenService.schaueBaseAn();
        expect(ev3ColorAdapterService.getColor).toHaveBeenCalledTimes(1);
    });
});
