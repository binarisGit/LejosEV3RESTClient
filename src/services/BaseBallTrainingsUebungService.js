/**
 * Created by Christian on 08.01.2016.
 */
var BinarisEV3;
(function (BinarisEV3) {
    var BaseBallTrainingsUebungService = (function () {
        function BaseBallTrainingsUebungService(BaseBallBewegungsartenService) {
            this.TIPPEL_SCHRITT_DISTANZ = 1;
            this.LAUF_DISTANZ_STOP_AND_GO_SEQUENZ = 10;
            this.baseBallBewegungsartenService = BaseBallBewegungsartenService;
        }
        BaseBallTrainingsUebungService.prototype.tippeln = function () {
            this.baseBallBewegungsartenService.laufen(this.TIPPEL_SCHRITT_DISTANZ);
            this.baseBallBewegungsartenService.laufen(-this.TIPPEL_SCHRITT_DISTANZ);
            this.baseBallBewegungsartenService.laufen(this.TIPPEL_SCHRITT_DISTANZ);
        };
        BaseBallTrainingsUebungService.prototype.stopAndGo = function (anzahlSequenzen) {
            var index = 0;
            (function next() {
                if (index++ >= anzahlSequenzen)
                    return;
                setTimeout(function () {
                    this.tippeln();
                    this.baseBallBewegungsartenService.laufen(this.LAUF_DISTANZ_STOP_AND_GO_SEQUENZ);
                    this.baseBallBewegungsartenService.anhalten();
                    next();
                }, 100);
            })();
        };
        BaseBallTrainingsUebungService.prototype.schlaegerSchwingen = function () {
            this.baseBallBewegungsartenService.linksWenden();
            this.baseBallBewegungsartenService.rechtsWenden();
        };
        BaseBallTrainingsUebungService.$inject = [BinarisEV3.BaseBallBewegungsartenService.IID];
        return BaseBallTrainingsUebungService;
    })();
    BinarisEV3.BaseBallTrainingsUebungService = BaseBallTrainingsUebungService;
})(BinarisEV3 || (BinarisEV3 = {}));
