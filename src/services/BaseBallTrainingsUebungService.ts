/**
 * Created by Christian on 08.01.2016.
 */

namespace BinarisEV3 {
    export class BaseBallTrainingsUebungService implements ITrainingsUebungService {
        public TIPPEL_SCHRITT_DISTANZ: number = 1;
        public LAUF_DISTANZ_STOP_AND_GO_SEQUENZ = 10;
        private baseBallBewegungsartenService: ISportBewegungsArtenService;

        static $inject = [BaseBallBewegungsartenService.IID];

        constructor(BaseBallBewegungsartenService: ISportBewegungsArtenService) {
            this.baseBallBewegungsartenService = BaseBallBewegungsartenService;
        }

        public tippeln(): void {
            this.baseBallBewegungsartenService.laufen(this.TIPPEL_SCHRITT_DISTANZ);
            this.baseBallBewegungsartenService.laufen(-this.TIPPEL_SCHRITT_DISTANZ);
            this.baseBallBewegungsartenService.laufen(this.TIPPEL_SCHRITT_DISTANZ);
        }

        public stopAndGo(anzahlSequenzen: number): void {
            /*
             Since there is no easy way to delay execution in JavaScript, we need a
             self-invoking, recursive function:
             http://patrickmuff.ch/blog/2014/03/12/for-loop-with-delay-in-javascript/
             */
            var index = 0;
            (function next() {
                if (index++ >= anzahlSequenzen) return;
                setTimeout(function () {
                    this.tippeln();
                    this.baseBallBewegungsartenService.laufen(this.LAUF_DISTANZ_STOP_AND_GO_SEQUENZ);
                    this.baseBallBewegungsartenService.anhalten();
                    next();
                }, 100);
            })();
        }

        public schlaegerSchwingen(): void {
            this.baseBallBewegungsartenService.linksWenden();
            this.baseBallBewegungsartenService.rechtsWenden();
        }
    }
}