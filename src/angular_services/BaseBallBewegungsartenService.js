/**
 * Created by kay.odenthal on 07.01.2016.
 */
var BinarisEV3;
(function (BinarisEV3) {
    var BaseBallBewegungsArtenService = (function () {
        function BaseBallBewegungsArtenService(EV3DifferentialPilotAdapterService) {
            this.ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
        }
        BaseBallBewegungsArtenService.prototype.laufen = function (laufstrecke) {
            this.ev3DifferentialPilotAdapterService.run(laufstrecke);
        };
        BaseBallBewegungsArtenService.prototype.anhalten = function () {
            this.ev3DifferentialPilotAdapterService.stop();
        };
        BaseBallBewegungsArtenService.prototype.linksWenden = function () {
            var promise = this.ev3DifferentialPilotAdapterService.rotate(90);
        };
        BaseBallBewegungsArtenService.prototype.rechtsWenden = function () {
            this.ev3DifferentialPilotAdapterService.rotate(-90);
        };
        BaseBallBewegungsArtenService.$inject = ["EV3DifferentialPilotAdapterService"];
        return BaseBallBewegungsArtenService;
    })();
    BinarisEV3.BaseBallBewegungsArtenService = BaseBallBewegungsArtenService;
})(BinarisEV3 || (BinarisEV3 = {}));
