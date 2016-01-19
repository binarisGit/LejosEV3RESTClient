var BinarisEV3;
(function (BinarisEV3) {
    var MainController = (function () {
        function MainController($scope, $http, $q, EV3DifferentialPilotAdapterService, EV3SoundAdapterService, EV3ColorAdapterService, BaseBallBewegungsArtenService, BaseBallTrainingsUebungService) {
            this.$scope = $scope;
            this.qService = $q;
            this.httpService = $http;
            this.ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
            this.ev3SoundAdapterService = EV3SoundAdapterService;
            this.ev3ColorAdapterService = EV3ColorAdapterService;
            this.baseBallBewegungsArten = BaseBallBewegungsArtenService;
            this.baseBallTrainingsUebungService = BaseBallTrainingsUebungService;
        }
        MainController.prototype.a = function () {
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
        };
        MainController.prototype.b = function () {
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
        };
        MainController.prototype.c = function () {
            this.ev3SoundAdapterService.buzz();
            this.ev3SoundAdapterService.beep();
            this.ev3SoundAdapterService.buzz();
            this.ev3SoundAdapterService.beep();
            this.ev3SoundAdapterService.buzz();
            this.ev3SoundAdapterService.beep();
            this.ev3SoundAdapterService.buzz();
            this.ev3SoundAdapterService.beep();
        };
        MainController.prototype.d = function () {
            this.baseBallBewegungsArten.laufen(40);
            this.baseBallBewegungsArten.laufen(-40);
            this.baseBallBewegungsArten.laufen(40);
            this.ev3SoundAdapterService.beep();
        };
        MainController.prototype.e = function () {
            console.log(this.ev3ColorAdapterService);
            this.ev3DifferentialPilotAdapterService.run(40);
            this.ev3ColorAdapterService.getColor().then(function successCallback(response) {
                console.log("Farbe: ");
                console.log(response.data.color);
            }, function errorCallback(response) {
                console.log("Farbe konnte nicht ermittelt werden. Status:");
                console.log(response.status);
            });
        };
        MainController.$inject = ["$scope", "$http", "$q", "EV3DifferentialPilotAdapterService", "EV3SoundAdapterService", "EV3ColorAdapterService", "BaseBallBewegungsArtenService", "BaseBallTrainingsUebungService"];
        return MainController;
    })();
    BinarisEV3.MainController = MainController;
})(BinarisEV3 || (BinarisEV3 = {}));
