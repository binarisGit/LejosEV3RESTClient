namespace BinarisEV3 {
    import IHttpService = angular.IHttpService;
    export class MainController {
        private $scope: ng.IScope;
        private ev3DifferentialPilotAdapterService: IDifferentialPilotAdapterService;
        private ev3SoundAdapterService: ISoundAdapterService;
        private ev3ColorAdapterService: IColorAdapterService;
        private baseBallBewegungsArten: ISportBewegungsArtenService;
        private baseBallTrainingsUebungService: ITrainingsUebungService;
        private httpService: IHttpService;
        private qService: any;

        static $inject = ["$scope", "$http", "$q", "EV3DifferentialPilotAdapterService", "EV3SoundAdapterService", "EV3ColorAdapterService", "BaseBallBewegungsArtenService", "BaseBallTrainingsUebungService"];

        constructor($scope: ng.IScope, $http: IHttpService, $q: any, EV3DifferentialPilotAdapterService: IDifferentialPilotAdapterService,
                    EV3SoundAdapterService: ISoundAdapterService, EV3ColorAdapterService: IColorAdapterService,
                    BaseBallBewegungsArtenService: ISportBewegungsArtenService, BaseBallTrainingsUebungService: ITrainingsUebungService) {
            this.$scope = $scope;
            this.qService = $q;
            this.httpService = $http;
            this.ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
            this.ev3SoundAdapterService = EV3SoundAdapterService;
            this.ev3ColorAdapterService = EV3ColorAdapterService;
            this.baseBallBewegungsArten = BaseBallBewegungsArtenService;
            this.baseBallTrainingsUebungService = BaseBallTrainingsUebungService;
        }

        /*
         ===================================
         Add your Code in following methods:
         ===================================
         */

        public a() {
            var http = this.httpService;
            http.get("http://10.0.0.44:8080/sound/beep").then(function () {
                return http.get("http://10.0.0.44:8080/differentialpilot/run/10");
            }).then(function () {
                return http.get("http://10.0.0.44:8080/sound/buzz");
            }).then(function () {
                return http.get("http://10.0.0.44:8080/differentialpilot/rotate/120");
            }).then(function () {
                return http.get("http://10.0.0.44:8080/sound/buzz");
            }).then(function () {
                return http.get("http://10.0.0.44:8080/color/getcolor");
            }).then(function () {
                return http.get("http://10.0.0.44:8080/sound/buzz");
            });
        }

        // homerun
        public b() {
            console.log("executing....");
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

            //this.ev3SoundAdapterService.beep();

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
            this.baseBallBewegungsArten.laufen(-40);
            this.baseBallBewegungsArten.laufen(40);
            //   this.baseBallBewegungsArten.rechtsWenden();
            //    this.ev3SoundAdapterService.buzz();
            this.ev3SoundAdapterService.beep();

        }

        public e() {
            console.log(this.ev3ColorAdapterService);
            this.ev3DifferentialPilotAdapterService.run(40);
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