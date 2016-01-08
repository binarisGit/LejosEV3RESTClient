/**
 * Created by Christian on 08.01.2016.
 */

/**
 * Created by kay.odenthal on 07.01.2016.
 */

namespace BinarisEV3 {
    export class BaseBallAktionenService implements IBallSportAktionenService {
        private ev3DifferentialPilotAdapterService: IDifferentialPilotAdapterService;
        private ev3SoundAdapterService: ISoundAdapterService;

        constructor(EV3DifferentialPilotAdapterService: IDifferentialPilotAdapterService, EV3SoundAdapterService: ISoundAdapterService) {
            this.ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
            this.ev3SoundAdapterService = EV3SoundAdapterService;
        }

        trifftBall(): boolean {
            return Math.round((Math.random() * 5.0)) % 5 != 0;
        }

        schaueBaseAn(): number {
            return null;
        }

        gibtZustimmendesHandzeichen(): void {
            this.ev3SoundAdapterService.beep();
        }

        gibtAblehnendesHandzeichen(): void {
            this.ev3SoundAdapterService.buzz();
        }

        schlageBall(): number {
            return (Math.random() * (101 - 0) + 0);
        }
    }
}