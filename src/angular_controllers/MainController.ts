namespace BinarisEV3 {
    export class MainController {
        private $scope: ng.IScope;
        private delayedHttpService: IDelayedHttpService;
        private ev3DifferentialPilotAdapterService: IDifferentialPilotAdapterService;
        private ev3SoundAdapterService: ISoundAdapterService;
        private ev3ColorAdapterService: IColorAdapterService;
        private baseBallBewegungsArten: ISportBewegungsArtenService;
        private baseBallTrainingsUebungService: ITrainingsUebungService;

        static $inject = ["$scope", "EV3DifferentialPilotAdapterService", "EV3SoundAdapterService", "EV3ColorAdapterService", "BaseBallBewegungsArtenService", "BaseBallTrainingsUebungService", "DelayedHttpService"];

        constructor($scope: ng.IScope, EV3DifferentialPilotAdapterService: IDifferentialPilotAdapterService,
                    EV3SoundAdapterService: ISoundAdapterService, EV3ColorAdapterService: IColorAdapterService,
                    BaseBallBewegungsArtenService: ISportBewegungsArtenService, BaseBallTrainingsUebungService: ITrainingsUebungService, DelayedHttpService: IDelayedHttpService) {
            this.$scope = $scope;
            this.delayedHttpService = DelayedHttpService;
            this.ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
            this.ev3SoundAdapterService = EV3SoundAdapterService;
            this.ev3ColorAdapterService = EV3ColorAdapterService;
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

            this.ev3SoundAdapterService.beep();
        }

        // homerun
        public b() {
            this.baseBallBewegungsArten.laufen(40);
            this.baseBallBewegungsArten.rechtsWenden();
            this.baseBallBewegungsArten.laufen(40);
            this.baseBallBewegungsArten.rechtsWenden();
            this.baseBallBewegungsArten.laufen(40);
            this.baseBallBewegungsArten.rechtsWenden();
            this.baseBallBewegungsArten.laufen(40);

            this.ev3SoundAdapterService.beep();

        }

        public c() {
            this.ev3SoundAdapterService.buzz();
            this.ev3SoundAdapterService.beep();
            this.ev3SoundAdapterService.buzz();
            this.ev3SoundAdapterService.beep();
            this.ev3SoundAdapterService.buzz();
            this.ev3SoundAdapterService.beep();
            this.ev3SoundAdapterService.buzz();
            this.ev3SoundAdapterService.beep();

        }

        // homerun
        public d() {
            this.baseBallBewegungsArten.laufen(40);
            this.baseBallBewegungsArten.rechtsWenden();
            this.ev3SoundAdapterService.buzz();
            this.ev3SoundAdapterService.beep();

        }

        public e() {
            console.log(this.ev3ColorAdapterService);
            this.ev3ColorAdapterService.getColor().then(function successCallback(response: any) {
                console.log("Farbe: ");
                console.log(response.data.color);
            }, function errorCallback(response: any) {
                console.log("Farbe konnte nicht ermittelt werden. Status:");
                console.log(response.status);
            });
        }

    }
}