/**
 * Created by Christian on 08.01.2016.
 */
var BinarisEV3;
(function (BinarisEV3) {
    var BaseBallTrainingsUebungService = (function () {
        function BaseBallTrainingsUebungService(BaseBallBewegungsArtenService) {
            this.TIPPEL_SCHRITT_DISTANZ = 4;
            this.LAUF_DISTANZ_STOP_AND_GO_SEQUENZ = 20;
            this.baseBallBewegungsArtenService = BaseBallBewegungsArtenService;
        }
        BaseBallTrainingsUebungService.prototype.tippeln = function () {
            this.baseBallBewegungsArtenService.laufen(this.TIPPEL_SCHRITT_DISTANZ);
            this.baseBallBewegungsArtenService.laufen(-this.TIPPEL_SCHRITT_DISTANZ);
            this.baseBallBewegungsArtenService.laufen(this.TIPPEL_SCHRITT_DISTANZ);
        };
        BaseBallTrainingsUebungService.prototype.stopAndGo = function (anzahlSequenzen) {
            this.tippeln();
            this.baseBallBewegungsArtenService.laufen(this.LAUF_DISTANZ_STOP_AND_GO_SEQUENZ);
            this.tippeln();
        };
        BaseBallTrainingsUebungService.prototype.schlaegerSchwingen = function () {
            this.baseBallBewegungsArtenService.linksWenden();
            this.baseBallBewegungsArtenService.rechtsWenden();
        };
        BaseBallTrainingsUebungService.$inject = ["BaseBallBewegungsArtenService"];
        return BaseBallTrainingsUebungService;
    })();
    BinarisEV3.BaseBallTrainingsUebungService = BaseBallTrainingsUebungService;
})(BinarisEV3 || (BinarisEV3 = {}));