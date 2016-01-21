/**
 * Created by Christian on 08.01.2016.
 */

namespace BinarisEV3 {
    export class BaseBallTrainingsUebungService implements ITrainingsUebungService {
        private baseBallBewegungsArtenService: ISportBewegungsArtenService;

        static $inject = ["BaseBallBewegungsArtenService"];

        constructor(BaseBallBewegungsArtenService: ISportBewegungsArtenService) {
            this.baseBallBewegungsArtenService = BaseBallBewegungsArtenService;
        }

        public tippeln(): ng.IPromise<any> {
            var baseBallBewegungsArtenService = this.baseBallBewegungsArtenService;
            var TIPPEL_SCHRITT_DISTANZ = 4;
            return this.baseBallBewegungsArtenService.laufen(TIPPEL_SCHRITT_DISTANZ).then(function () {
                return baseBallBewegungsArtenService.laufen(-TIPPEL_SCHRITT_DISTANZ);
            }).then(function () {
                return baseBallBewegungsArtenService.laufen(TIPPEL_SCHRITT_DISTANZ);
            });
        }

        public schlaegerSchwingen(): ng.IPromise<any> {
            var baseBallBewegungsArtenService = this.baseBallBewegungsArtenService;
            return this.baseBallBewegungsArtenService.linksWenden().then(function () {
                return baseBallBewegungsArtenService.rechtsWenden();
            });
        }
    }
}