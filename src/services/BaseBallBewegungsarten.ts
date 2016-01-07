/**
 * Created by kay.odenthal on 07.01.2016.
 */

namespace BinarisEV3 {
    export class BaseBallBewegungsartenService implements ISportBewegungsArtenService {
        private ev3DifferentialPilotAdapterService: IDifferentialPilotAdapterService;

        constructor(EV3DifferentialPilotAdapterService: IDifferentialPilotAdapterService) {
            this.ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
        }

        laufen(laufstrecke: number): void {
            this.ev3DifferentialPilotAdapterService.run(laufstrecke);
        }

        anhalten(): void {
            this.ev3DifferentialPilotAdapterService.stop();
        }

        linksWenden(): void {
            this.ev3DifferentialPilotAdapterService.rotate(-45);
        }

        rechtsWenden(): void {
            this.ev3DifferentialPilotAdapterService.rotate(45);
        }
    }
}