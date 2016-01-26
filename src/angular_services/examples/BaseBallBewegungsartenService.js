var BinarisEV3;
(function (BinarisEV3) {
    var BaseBallBewegungsArtenService = (function () {
        function BaseBallBewegungsArtenService(EV3DifferentialPilotAdapterService) {
            this.ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
        }
        BaseBallBewegungsArtenService.prototype.laufen = function (laufstrecke) {
            return this.ev3DifferentialPilotAdapterService.run(laufstrecke);
        };
        BaseBallBewegungsArtenService.prototype.anhalten = function () {
            return this.ev3DifferentialPilotAdapterService.stop();
        };
        BaseBallBewegungsArtenService.prototype.linksWenden = function () {
            return this.ev3DifferentialPilotAdapterService.rotate(90);
        };
        BaseBallBewegungsArtenService.prototype.rechtsWenden = function () {
            return this.ev3DifferentialPilotAdapterService.rotate(-90);
        };
        BaseBallBewegungsArtenService.$inject = ["EV3DifferentialPilotAdapterService"];
        return BaseBallBewegungsArtenService;
    })();
    BinarisEV3.BaseBallBewegungsArtenService = BaseBallBewegungsArtenService;
})(BinarisEV3 || (BinarisEV3 = {}));
