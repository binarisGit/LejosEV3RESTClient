/**
 * Created by Christian on 08.01.2016.
 */

namespace BinarisEV3 {
    export class BaseBallAktionenService implements IBallSportAktionenService {
        private ev3DifferentialPilotAdapterService:IDifferentialPilotAdapterService;
        private ev3SoundAdapterService:ISoundAdapterService;
        private ev3ColorAdapterService:IColorAdapterService;
        private intervalService:ng.IIntervalService;
        private qService:ng.IQService;

        static $inject = ["EV3DifferentialPilotAdapterService", "EV3SoundAdapterService", "EV3ColorAdapterService", "$interval", "$q"];

        constructor(EV3DifferentialPilotAdapterService:IDifferentialPilotAdapterService, EV3SoundAdapterService:ISoundAdapterService, EV3ColorAdapterService:IColorAdapterService, $interval:ng.IIntervalService, $q:ng.IQService) {
            this.ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
            this.ev3SoundAdapterService = EV3SoundAdapterService;
            this.ev3ColorAdapterService = EV3ColorAdapterService;
            this.intervalService = $interval;
            this.qService = $q;
        }

        public trifftBall():boolean {
            return Math.round((Math.random() * 5.0)) % 5 != 0;
        }

        public schaueBaseAn():ng.IPromise<number> {
            return this.ev3ColorAdapterService.getColor();
        }

        public gibtZustimmendesHandzeichen():ng.IPromise<any> {
            return this.ev3SoundAdapterService.beep();
        }

        public gibtAblehnendesHandzeichen():ng.IPromise<any> {
            return this.ev3SoundAdapterService.buzz();
        }

        public schlageBall():number {
            return (Math.random() * (101 - 0) + 0);
        }

        public laufeVorwaertsUndZurueck(laenge:number):ng.IPromise<any>{
         return this.ev3DifferentialPilotAdapterService.run(laenge)
            .then((response:any)=> {
                return this.ev3DifferentialPilotAdapterService.rotate(180);
            })
            .then((response:any)=> {
                 return this.ev3DifferentialPilotAdapterService.run(laenge);
            })
            .then((response:any)=> {
                return this.ev3DifferentialPilotAdapterService.rotate(180);
            });
        }






/*
        public geheZurNaechstenBase():ng.IPromise<any> {
            this.ev3DifferentialPilotAdapterService.run(40);

            var rotateAndResolvePromise = (response:any)=> {
                this.ev3DifferentialPilotAdapterService.rotate(-90);
                defered.resolve();
            };

            var checkColor = (colorID:string)=> {
                if (colorID == "6") {
                    if (this.intervalService.cancel(interval)) {
                        this.ev3DifferentialPilotAdapterService.stop().then(()=> {
                            return this.ev3SoundAdapterService.beep();
                        }).then(rotateAndResolvePromise);
                    }
                }
            };

            var defered = this.qService.defer();
            var interval = this.intervalService(()=> {
                this.ev3ColorAdapterService.getColor().then((response:any) => {
                    checkColor(response.data);
                });
            }, 1000);

            return defered.promise;
        }*/
    }
}