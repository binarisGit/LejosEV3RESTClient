namespace BinarisEV3 {
    export class MainController {
        private $scope: ng.IScope;
        private delayedHttpService: IDelayedHttpService;
        private ev3DifferentialPilotAdapterService: IDifferentialPilotAdapterService;
        private ev3SoundAdapterService: ISoundAdapterService;
        private baseBallBewegungsArten: ISportBewegungsArtenService;
        private baseBallTrainingsUebungService: ITrainingsUebungService;

        static $inject = ["$scope", "EV3DifferentialPilotAdapterService", "EV3SoundAdapterService", "BaseBallBewegungsArtenService", "BaseBallTrainingsUebungService"];

        constructor($scope: ng.IScope, EV3DifferentialPilotAdapterService: IDifferentialPilotAdapterService,
                    EV3SoundAdapterService: ISoundAdapterService, BaseBallBewegungsArtenService: ISportBewegungsArtenService, BaseBallTrainingsUebungService: ITrainingsUebungService, DelayedHttpService: IDelayedHttpService) {
            this.$scope = $scope;
            this.delayedHttpService = DelayedHttpService;
            this.ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
            this.ev3SoundAdapterService = EV3SoundAdapterService;
            this.baseBallBewegungsArten = BaseBallBewegungsArtenService;
            this.baseBallTrainingsUebungService = BaseBallTrainingsUebungService;
        }

        public a() {
            this.delayedHttpService.resetHttpSendDelay();

            this.baseBallTrainingsUebungService.tippeln();
        }

        public b() {
            this.delayedHttpService.resetHttpSendDelay();

            this.baseBallBewegungsArten.laufen(5);
            this.baseBallBewegungsArten.linksWenden();
            this.baseBallBewegungsArten.laufen(5);
        }

        public c() {
            this.delayedHttpService.resetHttpSendDelay();

            this.baseBallBewegungsArten.linksWenden();
            this.baseBallBewegungsArten.linksWenden();
            this.baseBallBewegungsArten.linksWenden();
            this.baseBallBewegungsArten.rechtsWenden();
        }

        // homerun
        public d() {
            this.delayedHttpService.resetHttpSendDelay();

            this.baseBallBewegungsArten.laufen(15);
            this.baseBallBewegungsArten.rechtsWenden();
            this.baseBallBewegungsArten.laufen(15);
            this.baseBallBewegungsArten.rechtsWenden();
            this.baseBallBewegungsArten.laufen(15);
            this.baseBallBewegungsArten.rechtsWenden();
            this.baseBallBewegungsArten.laufen(15);
            this.baseBallBewegungsArten.rechtsWenden();
            this.baseBallBewegungsArten.laufen(15);
            this.ev3SoundAdapterService.beep();
        }

        public e() {
            this.delayedHttpService.resetHttpSendDelay();

            alert("Dieser Button ist mit keiner Implementierung belegt!");
        }

    }
}