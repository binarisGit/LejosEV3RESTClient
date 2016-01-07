/**
 * Created by kay.odenthal on 07.01.2016.
 */
var BinarisEV3;
(function (BinarisEV3) {
    var BaseBallBewegungsartenService = (function () {
        function BaseBallBewegungsartenService(EV3DifferentialPilotAdapterService) {
            this.ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
        }
        BaseBallBewegungsartenService.prototype.laufen = function (laufstrecke) {
            this.ev3DifferentialPilotAdapterService.run(laufstrecke);
        };
        BaseBallBewegungsartenService.prototype.anhalten = function () {
            this.ev3DifferentialPilotAdapterService.stop();
        };
        BaseBallBewegungsartenService.prototype.linksWenden = function () {
            this.ev3DifferentialPilotAdapterService.rotate(-45);
        };
        BaseBallBewegungsartenService.prototype.rechtsWenden = function () {
            this.ev3DifferentialPilotAdapterService.rotate(45);
        };
        return BaseBallBewegungsartenService;
    })();
    BinarisEV3.BaseBallBewegungsartenService = BaseBallBewegungsartenService;
})(BinarisEV3 || (BinarisEV3 = {}));
