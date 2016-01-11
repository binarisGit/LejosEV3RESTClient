namespace BinarisEV3 {
    export class MainController {
        private $scope: ng.IScope;
        private delayedHttpService: IDelayedHttpService;
        private ev3DifferentialPilotAdapterService: IDifferentialPilotAdapterService;
        private ev3SoundAdapterService: ISoundAdapterService;
        private baseBallBewegungsArten: ISportBewegungsArtenService;
        private baseBallTrainingsUebungService: ITrainingsUebungService;

        static $inject = ["$scope", "EV3DifferentialPilotAdapterService", "EV3SoundAdapterService", "BaseBallBewegungsArtenService", "BaseBallTrainingsUebungService", "DelayedHttpService"];

        constructor($scope: ng.IScope, EV3DifferentialPilotAdapterService: IDifferentialPilotAdapterService,
                    EV3SoundAdapterService: ISoundAdapterService, BaseBallBewegungsArtenService: ISportBewegungsArtenService, BaseBallTrainingsUebungService: ITrainingsUebungService, DelayedHttpService: IDelayedHttpService) {
            this.$scope = $scope;
            this.delayedHttpService = DelayedHttpService;
            this.ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
            this.ev3SoundAdapterService = EV3SoundAdapterService;
            this.baseBallBewegungsArten = BaseBallBewegungsArtenService;
            this.baseBallTrainingsUebungService = BaseBallTrainingsUebungService;
        }

        public executeCustomActionMethod(id: number) {
            this.delayedHttpService.resetHttpSendDelay();

            switch (id) {
                case 1:
                    this.a();
                    break;
                case 2:
                    this.b();
                    break;
                case 3:
                    this.c();
                    break;
                case 4:
                    this.d();
                    break;
                case 5:
                    this.e();
            }
        }

        /*
         ===================================
         Add your Code in following methods:
         ===================================
         */

        public a() {
            this.baseBallTrainingsUebungService.tippeln();
        }

        // homerun
        public b() {
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

        public c() {
            alert("Dieser Button ist mit keiner Implementierung belegt!");

        }

        // homerun
        public d() {
            alert("Dieser Button ist mit keiner Implementierung belegt!");

        }

        public e() {
            alert("Dieser Button ist mit keiner Implementierung belegt!");
        }

    }
}