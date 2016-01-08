/**
 * Created by Christian on 08.01.2016.
 */


namespace BinarisEV3 {
    export class BaseBallAktionenService implements IBallSportAktionenService {
        private ev3DifferentialPilotAdapterService: IDifferentialPilotAdapterService;
        private ev3SoundAdapterService: ISoundAdapterService;

        static $inject = [EV3DifferentialPilotAdapterService.IID, EV3SoundAdapterService.IID];

        constructor(EV3DifferentialPilotAdapterService: IDifferentialPilotAdapterService, EV3SoundAdapterService: ISoundAdapterService) {
            this.ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
            this.ev3SoundAdapterService = EV3SoundAdapterService;
        }

        public trifftBall(): boolean {
            return Math.round((Math.random() * 5.0)) % 5 != 0;
        }

        public schaueBaseAn(): number {
            return null;
        }

        public gibtZustimmendesHandzeichen(): void {
            this.ev3SoundAdapterService.beep();
        }

        public gibtAblehnendesHandzeichen(): void {
            this.ev3SoundAdapterService.buzz();
        }

        public schlageBall(): number {
            return (Math.random() * (101 - 0) + 0);
        }
    }
}