/**
 * Created by Christian on 08.01.2016.
 */
var BinarisEV3;
(function (BinarisEV3) {
    var BaseBallAktionenService = (function () {
        function BaseBallAktionenService(EV3DifferentialPilotAdapterService, EV3SoundAdapterService) {
            this.ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
            this.ev3SoundAdapterService = EV3SoundAdapterService;
        }
        BaseBallAktionenService.prototype.trifftBall = function () {
            return Math.round((Math.random() * 5.0)) % 5 != 0;
        };
        BaseBallAktionenService.prototype.schaueBaseAn = function () {
            return null;
        };
        BaseBallAktionenService.prototype.gibtZustimmendesHandzeichen = function () {
            this.ev3SoundAdapterService.beep();
        };
        BaseBallAktionenService.prototype.gibtAblehnendesHandzeichen = function () {
            this.ev3SoundAdapterService.buzz();
        };
        BaseBallAktionenService.prototype.schlageBall = function () {
            return (Math.random() * (101 - 0) + 0);
        };
        BaseBallAktionenService.$inject = ["EV3DifferentialPilotAdapterService", "EV3SoundAdapterService"];
        return BaseBallAktionenService;
    })();
    BinarisEV3.BaseBallAktionenService = BaseBallAktionenService;
})(BinarisEV3 || (BinarisEV3 = {}));
