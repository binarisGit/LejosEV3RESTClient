var BinarisEV3;
(function (BinarisEV3) {
    var BaseBallTrainingsUebungService = (function () {
        function BaseBallTrainingsUebungService(BaseBallBewegungsArtenService) {
            this.baseBallBewegungsArtenService = BaseBallBewegungsArtenService;
        }
        BaseBallTrainingsUebungService.prototype.tippeln = function () {
            var _this = this;
            var TIPPEL_SCHRITT_DISTANZ = 4;
            return this.baseBallBewegungsArtenService.laufen(TIPPEL_SCHRITT_DISTANZ).then(function () {
                return _this.baseBallBewegungsArtenService.laufen(-TIPPEL_SCHRITT_DISTANZ);
            }).then(function () {
                return _this.baseBallBewegungsArtenService.laufen(TIPPEL_SCHRITT_DISTANZ);
            });
        };
        BaseBallTrainingsUebungService.prototype.schlaegerSchwingen = function () {
            var _this = this;
            return this.baseBallBewegungsArtenService.linksWenden().then(function () {
                return _this.baseBallBewegungsArtenService.rechtsWenden();
            });
        };
        BaseBallTrainingsUebungService.$inject = ["BaseBallBewegungsArtenService"];
        return BaseBallTrainingsUebungService;
    })();
    BinarisEV3.BaseBallTrainingsUebungService = BaseBallTrainingsUebungService;
})(BinarisEV3 || (BinarisEV3 = {}));
