/**
 * Created by Christian on 08.01.2016.
 */

namespace BinarisEV3 {
    export class BaseBallAktionenService implements IBallSportAktionenService {
        private ev3DifferentialPilotAdapterService: IDifferentialPilotAdapterService;
        private ev3SoundAdapterService: ISoundAdapterService;
        private ev3ColorAdapterService: IColorAdapterService;

        static $inject = ["EV3DifferentialPilotAdapterService", "EV3SoundAdapterService"];

        constructor(EV3DifferentialPilotAdapterService: IDifferentialPilotAdapterService, EV3SoundAdapterService: ISoundAdapterService, EV3ColorAdapterService: IColorAdapterService) {
            this.ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
            this.ev3SoundAdapterService = EV3SoundAdapterService
            this.ev3ColorAdapterService = EV3ColorAdapterService;
        }

        public trifftBall(): boolean {
            return Math.round((Math.random() * 5.0)) % 5 != 0;
        }

        public schaueBaseAn(): ng.IPromise<number> {
            return this.ev3ColorAdapterService.getColor();
        }

        public gibtZustimmendesHandzeichen(): ng.IPromise<any> {
            console.log("gibt zustimmendes handzeichen");
            return this.ev3SoundAdapterService.beep();
        }

        public gibtAblehnendesHandzeichen(): ng.IPromise<any> {
            return this.ev3SoundAdapterService.buzz();
        }

        public schlageBall(): number {
            return (Math.random() * (101 - 0) + 0);
        }
    }
}