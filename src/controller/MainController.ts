namespace BinarisEV3 {
    export class MainController {
        private $scope: ng.IScope;
        private ev3DifferentialPilotAdapterService: IDifferentialPilotAdapterService;
        private ev3SoundAdapterService: ISoundAdapterService;
        private baseBallBewegungsArten: ISportBewegungsArtenService;
        private baseBallTrainingsUebungService: ITrainingsUebungService;

        constructor($scope: ng.IScope, EV3DifferentialPilotAdapterService: IDifferentialPilotAdapterService,
                    EV3SoundAdapterService: ISoundAdapterService, BaseBallBewegungsArtenService: ISportBewegungsArtenService, BaseBallTrainingsUebungService: ITrainingsUebungService) {
            this.$scope = $scope;
            this.ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
            this.ev3SoundAdapterService = EV3SoundAdapterService;
            this.baseBallBewegungsArten = BaseBallBewegungsArtenService;
            this.baseBallTrainingsUebungService = BaseBallTrainingsUebungService;
        }

        /*
         ACHTUNG:
         Der Roboter führt alle Bewegungen korrekt nacheinanander aus, solange es sich um die gleiche Bewegung handelt.
         Falls er sich in die entgegengesetzte Richtung bewegen soll, werden diese nicht mehr sequenziell ausgefhrt.
         Liegt evtl. am REST-Service?


         */

        public a() {
            // es treten probleme auf, wenn der roboter erst vorwärs, dann rückwärts fährt!
            this.ev3DifferentialPilotAdapterService.run(5);
            this.ev3DifferentialPilotAdapterService.run(-5);
        }

        public b() {
            // es treten probleme auf, wenn der roboter erst vorwärts fährt und sich dann dreht!
            this.baseBallBewegungsArten.laufen(5);
            this.baseBallBewegungsArten.linksWenden();
        }

        public c() {
            // OK!
            this.baseBallBewegungsArten.linksWenden();
            this.baseBallBewegungsArten.linksWenden();
            this.baseBallBewegungsArten.linksWenden();
            this.baseBallBewegungsArten.rechtsWenden();
        }

        public d() {
            alert("Dieser Button ist mit keiner Implementierung belegt!");
        }

        public e() {
            alert("Dieser Button ist mit keiner Implementierung belegt!");
        }

    }
}