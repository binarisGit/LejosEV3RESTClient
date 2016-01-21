/**
 * Created by Christian on 08.01.2016.
 */
var BinarisEV3;
(function (BinarisEV3) {
    var BaseBallAktionenService = (function () {
        function BaseBallAktionenService(EV3DifferentialPilotAdapterService, EV3SoundAdapterService, EV3ColorAdapterService) {
            this.ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
            this.ev3SoundAdapterService = EV3SoundAdapterService;
            this.ev3ColorAdapterService = EV3ColorAdapterService;
        }
        BaseBallAktionenService.prototype.trifftBall = function () {
            return Math.round((Math.random() * 5.0)) % 5 != 0;
        };
        BaseBallAktionenService.prototype.schaueBaseAn = function () {
            return this.ev3ColorAdapterService.getColor();
        };
        BaseBallAktionenService.prototype.gibtZustimmendesHandzeichen = function () {
            console.log("gibt zustimmendes handzeichen");
            return this.ev3SoundAdapterService.beep();
        };
        BaseBallAktionenService.prototype.gibtAblehnendesHandzeichen = function () {
            return this.ev3SoundAdapterService.buzz();
        };
        BaseBallAktionenService.prototype.schlageBall = function () {
            return (Math.random() * (101 - 0) + 0);
        };
        BaseBallAktionenService.$inject = ["EV3DifferentialPilotAdapterService", "EV3SoundAdapterService"];
        return BaseBallAktionenService;
    })();
    BinarisEV3.BaseBallAktionenService = BaseBallAktionenService;
})(BinarisEV3 || (BinarisEV3 = {}));
