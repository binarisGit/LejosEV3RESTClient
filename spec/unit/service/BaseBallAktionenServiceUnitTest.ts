import IColorAdapterService = BinarisEV3.IColorAdapterService;
describe("BaseBallAktionen Unit test suite: ", () => {

    // SUT
    var baseBallAktionenService: any;

    // DOC
    var ev3DifferentialPilotAdapterService: any;
    var ev3SoundAdapterService: any;
    var ev3ColorAdapterService: any;

    beforeEach(angular.mock.module('binarisEV3DifferentialPilot'));

    beforeEach(() => {
        angular.mock.inject(function ($injector: any, EV3DifferentialPilotAdapterService: IDifferentialPilotAdapterService, EV3SoundAdapterService: ISoundAdapterService, EV3ColorAdapterService: IColorAdapterService) {
            ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
            ev3SoundAdapterService = EV3SoundAdapterService;
            ev3ColorAdapterService = EV3ColorAdapterService;
            baseBallAktionenService = new BinarisEV3.BaseBallAktionenService(ev3DifferentialPilotAdapterService, ev3SoundAdapterService, ev3ColorAdapterService);
        });
    });

    it("es wird ein zustimmendes handzeichen ausgeführt", () => {
        spyOn(ev3SoundAdapterService, "beep").and.callThrough();
        var promise = baseBallAktionenService.gibtZustimmendesHandzeichen();
        expect(ev3SoundAdapterService.beep).toHaveBeenCalledTimes(1);
    });

    it("es wird ein ablehnendes handzeichen ausgeführt", () => {
        spyOn(ev3SoundAdapterService, "buzz");
        baseBallAktionenService.gibtAblehnendesHandzeichen();
        expect(ev3SoundAdapterService.buzz).toHaveBeenCalledTimes(1);
    });

    it("wird die base angeschaut", () => {
        spyOn(ev3ColorAdapterService, "getColor");
        baseBallAktionenService.schaueBaseAn();
        expect(ev3ColorAdapterService.getColor).toHaveBeenCalledTimes(1);
    });

});