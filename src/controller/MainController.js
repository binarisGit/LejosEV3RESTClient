var BinarisEV3;
(function (BinarisEV3) {
    var MainController = (function () {
        function MainController($scope, EV3DifferentialPilotAdapterService, EV3SoundAdapterService, BaseBallBewegungsArtenService, BaseBallTrainingsUebungService) {
            this.$scope = $scope;
            this.ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
            this.ev3SoundAdapterService = EV3SoundAdapterService;
            this.baseBallBewegungsArten = BaseBallBewegungsArtenService;
            this.baseBallTrainingsUebungService = BaseBallTrainingsUebungService;
        }
        MainController.prototype.a = function () {
            this.ev3DifferentialPilotAdapterService.run(5);
            this.ev3DifferentialPilotAdapterService.run(-5);
        };
        MainController.prototype.b = function () {
            this.baseBallBewegungsArten.laufen(5);
            this.baseBallBewegungsArten.linksWenden();
        };
        MainController.prototype.c = function () {
            this.baseBallBewegungsArten.linksWenden();
            this.baseBallBewegungsArten.linksWenden();
            this.baseBallBewegungsArten.linksWenden();
            this.baseBallBewegungsArten.rechtsWenden();
        };
        MainController.prototype.d = function () {
            alert("Dieser Button ist mit keiner Implementierung belegt!");
        };
        MainController.prototype.e = function () {
            alert("Dieser Button ist mit keiner Implementierung belegt!");
        };
        return MainController;
    })();
    BinarisEV3.MainController = MainController;
})(BinarisEV3 || (BinarisEV3 = {}));
