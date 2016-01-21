var BinarisEV3;
(function (BinarisEV3) {
    var MainController = (function () {
        function MainController($scope, $http, EV3DifferentialPilotAdapterService, EV3SoundAdapterService, EV3ColorAdapterService, BaseBallBewegungsArtenService, BaseBallTrainingsUebungService) {
            this.defaultButtonName = "change button name in src/MainController.js";
            this.SLOT_A_ACTION_NAME = "tippeln";
            this.SLOT_B_ACTION_NAME = "schlaegerSchwingen";
            this.SLOT_C_ACTION_NAME = "homeRun";
            this.SLOT_D_ACTION_NAME = this.defaultButtonName;
            this.$scope = $scope;
            this.httpService = $http;
            this.ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
            this.ev3SoundAdapterService = EV3SoundAdapterService;
            this.ev3ColorAdapterService = EV3ColorAdapterService;
            this.baseBallBewegungsArten = BaseBallBewegungsArtenService;
            this.baseBallTrainingsUebungService = BaseBallTrainingsUebungService;
        }
        MainController.prototype.a = function () {
            this.baseBallTrainingsUebungService.tippeln();
        };
        MainController.prototype.b = function () {
            this.baseBallTrainingsUebungService.schlaegerSchwingen();
        };
        MainController.prototype.c = function () {
            var ev3DifferentialPilotAdapterService = this.ev3DifferentialPilotAdapterService;
            var ev3SoundAdapterService = this.ev3SoundAdapterService;
            this.ev3DifferentialPilotAdapterService.run(40).then(function () {
                console.log("recaived run...");
            });
            ev3DifferentialPilotAdapterService.run(40).then(function () {
                return ev3DifferentialPilotAdapterService.rotate(90);
            }).then(function () {
                return ev3DifferentialPilotAdapterService.run(40);
            }).then(function () {
                return ev3DifferentialPilotAdapterService.rotate(90);
            }).then(function () {
                return ev3DifferentialPilotAdapterService.run(40);
            }).then(function () {
                return ev3DifferentialPilotAdapterService.rotate(90);
            }).then(function () {
                return ev3DifferentialPilotAdapterService.run(40);
            }).then(function () {
                return ev3SoundAdapterService.beep();
            });
        };
        MainController.prototype.d = function () {
            alert("Keine Implementierung. Füge eine Implementierung im MainController.js ein.");
        };
        MainController.$inject = ["$scope", "$http", "EV3DifferentialPilotAdapterService", "EV3SoundAdapterService", "EV3ColorAdapterService", "BaseBallBewegungsArtenService", "BaseBallTrainingsUebungService"];
        return MainController;
    })();
    BinarisEV3.MainController = MainController;
})(BinarisEV3 || (BinarisEV3 = {}));
