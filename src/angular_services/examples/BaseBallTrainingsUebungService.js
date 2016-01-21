/**
 * Created by Christian on 08.01.2016.
 */
var BinarisEV3;
(function (BinarisEV3) {
    var BaseBallTrainingsUebungService = (function () {
        function BaseBallTrainingsUebungService(BaseBallBewegungsArtenService) {
            this.baseBallBewegungsArtenService = BaseBallBewegungsArtenService;
        }
        BaseBallTrainingsUebungService.prototype.tippeln = function () {
            var baseBallBewegungsArtenService = this.baseBallBewegungsArtenService;
            var TIPPEL_SCHRITT_DISTANZ = 4;
            return this.baseBallBewegungsArtenService.laufen(TIPPEL_SCHRITT_DISTANZ).then(function () {
                return baseBallBewegungsArtenService.laufen(-TIPPEL_SCHRITT_DISTANZ);
            }).then(function () {
                return baseBallBewegungsArtenService.laufen(TIPPEL_SCHRITT_DISTANZ);
            });
        };
        BaseBallTrainingsUebungService.prototype.schlaegerSchwingen = function () {
            var baseBallBewegungsArtenService = this.baseBallBewegungsArtenService;
            return this.baseBallBewegungsArtenService.linksWenden().then(function () {
                return baseBallBewegungsArtenService.rechtsWenden();
            });
        };
        BaseBallTrainingsUebungService.$inject = ["BaseBallBewegungsArtenService"];
        return BaseBallTrainingsUebungService;
    })();
    BinarisEV3.BaseBallTrainingsUebungService = BaseBallTrainingsUebungService;
})(BinarisEV3 || (BinarisEV3 = {}));
