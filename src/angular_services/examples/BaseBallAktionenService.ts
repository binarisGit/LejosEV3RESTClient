import IBallSportAktionenService = require("../../api/IBallSportAktionenService");
import IDifferentialPilotAdapterService = require("../../third_apis/IDifferentialPilotAdapterService");
import ISoundAdapterService = require("../../third_apis/ISoundAdapterService");
import IColorAdapterService = require("../../third_apis/IColorAdapterService");
import EV3DifferentialPilotAdapterService = require("../EV3DifferentialPilotAdapterService");
import EV3SoundAdapterService = require("../EV3SoundAdapterService");
import EV3ColorAdapterService = require("../EV3ColorAdapterService");

class BaseBallAktionenService implements IBallSportAktionenService {
    static IID = "BaseBallAktionenService";
    private ev3DifferentialPilotAdapterService: IDifferentialPilotAdapterService;
    private ev3SoundAdapterService: ISoundAdapterService;
    private ev3ColorAdapterService: IColorAdapterService;
    private intervalService: ng.IIntervalService;
    private qService: ng.IQService;

    static $inject = [EV3DifferentialPilotAdapterService.IID, EV3SoundAdapterService.IID, EV3ColorAdapterService.IID, "$interval", "$q"];

    constructor(EV3DifferentialPilotAdapterService: IDifferentialPilotAdapterService, EV3SoundAdapterService: ISoundAdapterService, EV3ColorAdapterService: IColorAdapterService, $interval: ng.IIntervalService, $q: ng.IQService) {
        this.ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
        this.ev3SoundAdapterService = EV3SoundAdapterService;
        this.ev3ColorAdapterService = EV3ColorAdapterService;
        this.intervalService = $interval;
        this.qService = $q;
    }

    public trifftBall(): boolean {
        return Math.round((Math.random() * 5.0)) % 5 != 0;
    }

    public schaueBaseAn(): ng.IPromise<number> {
        return this.ev3ColorAdapterService.getColor();
    }

    public gibtZustimmendesHandzeichen(): ng.IPromise<any> {
        return this.ev3SoundAdapterService.beep();
    }

    public gibtAblehnendesHandzeichen(): ng.IPromise<any> {
        return this.ev3SoundAdapterService.buzz();
    }

    public schlageBall(): number {
        return (Math.random() * (101 - 0) + 0);
    }

    public laufeVorwaertsUndZurueck(laenge: number): ng.IPromise<any> {
        return this.ev3DifferentialPilotAdapterService.run(laenge)
            .then((response: any)=> {
                return this.ev3DifferentialPilotAdapterService.rotate(180);
            })
            .then((response: any)=> {
                return this.ev3DifferentialPilotAdapterService.run(laenge);
            })
            .then((response: any)=> {
                return this.ev3DifferentialPilotAdapterService.rotate(180);
            });
    }
}
export = BaseBallAktionenService;
