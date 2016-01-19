/**
 * Created by kay.odenthal on 07.01.2016.
 */

namespace BinarisEV3 {
    export class BaseBallBewegungsArtenService implements ISportBewegungsArtenService {
        private ev3DifferentialPilotAdapterService: IDifferentialPilotAdapterService;

        static $inject = ["EV3DifferentialPilotAdapterService"];

        constructor(EV3DifferentialPilotAdapterService: IDifferentialPilotAdapterService) {
            this.ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
        }

        public laufen(laufstrecke: number): void {
            this.ev3DifferentialPilotAdapterService.run(laufstrecke);
        }

        public anhalten(): void {
            this.ev3DifferentialPilotAdapterService.stop();
        }

        public linksWenden(): void {
            var promise = this.ev3DifferentialPilotAdapterService.rotate(90);

        }

        public rechtsWenden(): void {
            this.ev3DifferentialPilotAdapterService.rotate(-90);
        }
    }
}