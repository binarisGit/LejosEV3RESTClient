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
        MainController.prototype.executeCustomActionMethod = function (id) {
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
        };
        MainController.prototype.a = function () {
            this.baseBallTrainingsUebungService.tippeln();
        };
        MainController.prototype.b = function () {
            this.baseBallBewegungsArten.laufen(40);
            this.baseBallBewegungsArten.rechtsWenden();
            this.baseBallBewegungsArten.laufen(40);
            this.baseBallBewegungsArten.rechtsWenden();
            this.baseBallBewegungsArten.laufen(40);
            this.baseBallBewegungsArten.rechtsWenden();
            this.baseBallBewegungsArten.laufen(40);
        };
        MainController.prototype.c = function () {
            alert("Dieser Button ist mit keiner Implementierung belegt!");
        };
        MainController.prototype.d = function () {
            alert("Dieser Button ist mit keiner Implementierung belegt!");
        };
        MainController.prototype.e = function () {
            alert("Dieser Button ist mit keiner Implementierung belegt!");
        };
        MainController.$inject = ["$scope", "EV3DifferentialPilotAdapterService", "EV3SoundAdapterService", "BaseBallBewegungsArtenService", "BaseBallTrainingsUebungService", "DelayedHttpService"];
        return MainController;
    })();
    BinarisEV3.MainController = MainController;
})(BinarisEV3 || (BinarisEV3 = {}));
