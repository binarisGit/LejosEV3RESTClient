/**
 * Created by Christian on 08.01.2016.
 */

namespace BinarisEV3 {
    export class BaseBallTrainingsUebungService implements ITrainingsUebungService {
        public TIPPEL_SCHRITT_DISTANZ: number = 4;
        public LAUF_DISTANZ_STOP_AND_GO_SEQUENZ = 20;
        private baseBallBewegungsArtenService: ISportBewegungsArtenService;

        static $inject = ["BaseBallBewegungsArtenService"];

        constructor(BaseBallBewegungsArtenService: ISportBewegungsArtenService) {
            this.baseBallBewegungsArtenService = BaseBallBewegungsArtenService;
        }

        public tippeln(): void {
            this.baseBallBewegungsArtenService.laufen(this.TIPPEL_SCHRITT_DISTANZ);
            this.baseBallBewegungsArtenService.laufen(-this.TIPPEL_SCHRITT_DISTANZ);
            this.baseBallBewegungsArtenService.laufen(this.TIPPEL_SCHRITT_DISTANZ);
        }

        public stopAndGo(anzahlSequenzen: number): void {
            /*
             Since there is no easy way to delay execution in JavaScript, we need a
             self-invoking, recursive function:
             http://patrickmuff.ch/blog/2014/03/12/for-loop-with-delay-in-javascript/
             */
            this.tippeln();
            //this.baseBallBewegungsArtenService.anhalten();
            this.baseBallBewegungsArtenService.laufen(this.LAUF_DISTANZ_STOP_AND_GO_SEQUENZ);
            this.tippeln();
            //this.baseBallBewegungsArtenService.laufen(this.LAUF_DISTANZ_STOP_AND_GO_SEQUENZ);
            /*
             var index = 0;
             (function next() {
             if (index++ >= anzahlSequenzen) return;
             setTimeout(function () {
             //this.tippeln();
             this.baseBallBewegungsArtenService.laufen(this.LAUF_DISTANZ_STOP_AND_GO_SEQUENZ);
             this.baseBallBewegungsArtenService.anhalten();
             next();
             }, 100);
             })()*/
        }

        public schlaegerSchwingen(): void {
            this.baseBallBewegungsArtenService.linksWenden();
            this.baseBallBewegungsArtenService.rechtsWenden();
        }
    }
}