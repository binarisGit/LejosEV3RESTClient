describe("BaseBallAktionen Unit test suite: ", function () {
    var baseBallAktionenService;
    var ev3DifferentialPilotAdapterService;
    var ev3SoundAdapterService;
    var ev3ColorAdapterService;
    var intervalService;
    var qService;
    var rootScope;
    beforeEach(angular.mock.module('binarisEV3DifferentialPilot'));
    beforeEach(function () {
        angular.mock.inject(function ($injector, EV3DifferentialPilotAdapterService, EV3SoundAdapterService, EV3ColorAdapterService, $interval, $q, $rootScope) {
            ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
            ev3SoundAdapterService = EV3SoundAdapterService;
            ev3ColorAdapterService = EV3ColorAdapterService;
            intervalService = $interval;
            qService = $q;
            rootScope = $rootScope;
            baseBallAktionenService = new BinarisEV3.BaseBallAktionenService(ev3DifferentialPilotAdapterService, ev3SoundAdapterService, ev3ColorAdapterService, $interval, $q);
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
    it("laufe 60cm vorwärts und laufe wieder zurück", function () {
        var promise = qService.resolve("resolved");
        spyOn(ev3DifferentialPilotAdapterService, "run").and.returnValue(promise);
        spyOn(ev3DifferentialPilotAdapterService, "rotate").and.returnValue(promise);
        baseBallAktionenService.laufeVorwaertsUndZurueck(60);
        rootScope.$digest();
        expect(ev3DifferentialPilotAdapterService.run).toHaveBeenCalledWith(60);
        expect(ev3DifferentialPilotAdapterService.run).toHaveBeenCalledTimes(2);
        expect(ev3DifferentialPilotAdapterService.rotate).toHaveBeenCalledWith(180);
        expect(ev3DifferentialPilotAdapterService.rotate).toHaveBeenCalledTimes(2);
    });
});
