
import IDifferentialPilotAdapterService = require("../../../src/third_apis/IDifferentialPilotAdapterService");
import ISoundAdapterService = require("../../../src/third_apis/ISoundAdapterService");
import IColorAdapterService = require("../../../src/third_apis/IColorAdapterService");
import BaseBallAktionenService = require("../../../src/angular_services/examples/BaseBallAktionenService");

describe("BaseBallAktionen Unit test suite: ", () => {

    // SUT
    var baseBallAktionenService: any;

    // DOC
    var ev3DifferentialPilotAdapterService: any;
    var ev3SoundAdapterService: any;
    var ev3ColorAdapterService: any;
    var intervalService: ng.IIntervalService;
    var qService: ng.IQService;
    var rootScope: ng.IRootScopeService;


    beforeEach(angular.mock.module('binarisEV3DifferentialPilot'));

    beforeEach(() => {
        angular.mock.inject(function ($injector: any, EV3DifferentialPilotAdapterService: IDifferentialPilotAdapterService, EV3SoundAdapterService: ISoundAdapterService, EV3ColorAdapterService: IColorAdapterService, $interval: ng.IIntervalService, $q: ng.IQService, $rootScope: ng.IRootScopeService) {
            ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
            ev3SoundAdapterService = EV3SoundAdapterService;
            ev3ColorAdapterService = EV3ColorAdapterService;
            intervalService = $interval;
            qService = $q;
            rootScope = $rootScope;
            baseBallAktionenService = new BaseBallAktionenService(ev3DifferentialPilotAdapterService, ev3SoundAdapterService, ev3ColorAdapterService, $interval, $q);
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

    it("laufe 60cm vorwärts und laufe wieder zurück", () =>{
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