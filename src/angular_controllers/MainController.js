var BinarisEV3;
(function (BinarisEV3) {
    var MainController = (function () {
        function MainController($scope, $http, EV3DifferentialPilotAdapterService, EV3SoundAdapterService, EV3ColorAdapterService, BaseBallBewegungsArtenService, BaseBallTrainingsUebungService) {
            this.defaultButtonName = "change button name in src/MainController.js";
            this.SLOT_A_ACTION_NAME = "tippeln";
            this.SLOT_B_ACTION_NAME = "stopAndGo";
            this.SLOT_C_ACTION_NAME = this.defaultButtonName;
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
        };
        MainController.prototype.b = function () {
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
        };
        MainController.prototype.d = function () {
        };
        MainController.prototype.e = function () {
        };
        MainController.$inject = ["$scope", "$http", "EV3DifferentialPilotAdapterService", "EV3SoundAdapterService", "EV3ColorAdapterService", "BaseBallBewegungsArtenService", "BaseBallTrainingsUebungService"];
        return MainController;
    })();
    BinarisEV3.MainController = MainController;
})(BinarisEV3 || (BinarisEV3 = {}));
