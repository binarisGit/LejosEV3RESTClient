/**
 * Created by Christian on 08.01.2016.
 */
var BinarisEV3;
(function (BinarisEV3) {
    var BaseBallTrainingsUebung = (function () {
        function BaseBallTrainingsUebung(BaseBallBewegungsartenService) {
            this.TIPPEL_SCHRITT_DISTANZ = 1;
            this.LAUF_DISTANZ_STOP_AND_GO_SEQUENZ = 10;
            this.baseBallBewegungsartenService = BaseBallBewegungsartenService;
        }
        BaseBallTrainingsUebung.prototype.tippeln = function () {
            this.baseBallBewegungsartenService.laufen(this.TIPPEL_SCHRITT_DISTANZ);
            this.baseBallBewegungsartenService.laufen(-this.TIPPEL_SCHRITT_DISTANZ);
            this.baseBallBewegungsartenService.laufen(this.TIPPEL_SCHRITT_DISTANZ);
        };
        BaseBallTrainingsUebung.prototype.stopAndGo = function (anzahlSequenzen) {
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
        BaseBallTrainingsUebung.prototype.schlaegerSchwingen = function () {
            this.baseBallBewegungsartenService.linksWenden();
            this.baseBallBewegungsartenService.rechtsWenden();
        };
        return BaseBallTrainingsUebung;
    })();
    BinarisEV3.BaseBallTrainingsUebung = BaseBallTrainingsUebung;
})(BinarisEV3 || (BinarisEV3 = {}));
