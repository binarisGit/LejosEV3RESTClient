var BinarisEV3;
(function (BinarisEV3) {
    var MainController = (function () {
        function MainController($scope, EV3DifferentialPilotAdapterService, EV3SoundAdapterService, BaseBallBewegungsArtenService, BaseBallTrainingsUebungService, DelayedHttpService) {
            this.$scope = $scope;
            this.delayedHttpService = DelayedHttpService;
            this.ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
            this.ev3SoundAdapterService = EV3SoundAdapterService;
            this.baseBallBewegungsArten = BaseBallBewegungsArtenService;
            this.baseBallTrainingsUebungService = BaseBallTrainingsUebungService;
        }
        MainController.prototype.a = function () {
            this.delayedHttpService.resetHttpSendDelay();
            this.baseBallTrainingsUebungService.tippeln();
        };
        MainController.prototype.b = function () {
            this.delayedHttpService.resetHttpSendDelay();
            this.baseBallBewegungsArten.laufen(5);
            this.baseBallBewegungsArten.linksWenden();
            this.baseBallBewegungsArten.laufen(5);
        };
        MainController.prototype.c = function () {
            this.delayedHttpService.resetHttpSendDelay();
            this.baseBallBewegungsArten.linksWenden();
            this.baseBallBewegungsArten.linksWenden();
            this.baseBallBewegungsArten.linksWenden();
            this.baseBallBewegungsArten.rechtsWenden();
        };
        MainController.prototype.d = function () {
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
        };
        MainController.prototype.e = function () {
            this.delayedHttpService.resetHttpSendDelay();
            alert("Dieser Button ist mit keiner Implementierung belegt!");
        };
        MainController.$inject = ["$scope", "EV3DifferentialPilotAdapterService", "EV3SoundAdapterService", "BaseBallBewegungsArtenService", "BaseBallTrainingsUebungService"];
        return MainController;
    })();
    BinarisEV3.MainController = MainController;
})(BinarisEV3 || (BinarisEV3 = {}));
