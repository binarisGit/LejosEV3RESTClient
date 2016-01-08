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
            console.log("links wenden");
            var promise = this.ev3DifferentialPilotAdapterService.rotate(-45);
        };
        BaseBallBewegungsArtenService.prototype.rechtsWenden = function () {
            console.log("rechts wenden");
            this.ev3DifferentialPilotAdapterService.rotate(45);
        };
        BaseBallBewegungsArtenService.IID = "BaseBallBewegungsArtenService";
        BaseBallBewegungsArtenService.$inject = [BinarisEV3.EV3DifferentialPilotAdapterService.IID];
        return BaseBallBewegungsArtenService;
    })();
    BinarisEV3.BaseBallBewegungsArtenService = BaseBallBewegungsArtenService;
})(BinarisEV3 || (BinarisEV3 = {}));
