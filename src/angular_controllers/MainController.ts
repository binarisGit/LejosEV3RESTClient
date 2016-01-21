namespace BinarisEV3 {
    import IHttpService = ng.IHttpService;
    export class MainController {

        /*
         ===================================================
         Change name of red action-buttons in index.html:
         ===================================================
         */
        private defaultButtonName: string = "change button name in src/MainController.js";
        public SLOT_A_ACTION_NAME = "tippeln";
        public SLOT_B_ACTION_NAME = "stopAndGo";
        public SLOT_C_ACTION_NAME = this.defaultButtonName;
        public SLOT_D_ACTION_NAME = this.defaultButtonName;

        private $scope: ng.IScope;
        private ev3DifferentialPilotAdapterService: IDifferentialPilotAdapterService;
        private ev3SoundAdapterService: ISoundAdapterService;
        private ev3ColorAdapterService: IColorAdapterService;
        private baseBallBewegungsArten: ISportBewegungsArtenService;
        private baseBallTrainingsUebungService: ITrainingsUebungService;
        private httpService: IHttpService;

        static $inject = ["$scope", "$http", "EV3DifferentialPilotAdapterService", "EV3SoundAdapterService", "EV3ColorAdapterService", "BaseBallBewegungsArtenService", "BaseBallTrainingsUebungService"];

        constructor($scope: ng.IScope, $http: IHttpService, EV3DifferentialPilotAdapterService: IDifferentialPilotAdapterService,
                    EV3SoundAdapterService: ISoundAdapterService, EV3ColorAdapterService: IColorAdapterService,
                    BaseBallBewegungsArtenService: ISportBewegungsArtenService, BaseBallTrainingsUebungService: ITrainingsUebungService) {
            this.$scope = $scope;
            this.httpService = $http;
            this.ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
            this.ev3SoundAdapterService = EV3SoundAdapterService;
            this.ev3ColorAdapterService = EV3ColorAdapterService;
            this.baseBallBewegungsArten = BaseBallBewegungsArtenService;
            this.baseBallTrainingsUebungService = BaseBallTrainingsUebungService;
        }

        /*
         ===================================================
         Add your code for red action-buttons in index.html:
         ===================================================
         */
        public a() {

        }

        // homerun
        public b() {
            var ev3DifferentialPilotAdapterService = this.ev3DifferentialPilotAdapterService;
            var ev3SoundAdapterService = this.ev3SoundAdapterService;
            var ev3ColorAdapterService = this.ev3ColorAdapterService;

            ev3DifferentialPilotAdapterService.run(5).then(function () {
                return ev3DifferentialPilotAdapterService.rotate(120);
            }).then(function () {
                return ev3SoundAdapterService.beep();
            }).then(function () {
                return ev3ColorAdapterService.getColor();
            }).then(function () {
                return ev3SoundAdapterService.buzz();
            });
        }

        public c() {

        }

        // homerun
        public d() {

        }

        public e() {

        }
    }

}