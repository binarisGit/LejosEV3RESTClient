var BinarisEV3;
(function (BinarisEV3) {
    var EV3SoundAdapterService = (function () {
        function EV3SoundAdapterService(DelayedHttpService) {
            this.BASE_URL = "http://10.0.0.44:8080/api/sound";
            this.delayedHttpService = DelayedHttpService;
        }
        EV3SoundAdapterService.prototype.buzz = function () {
            var url = this.BASE_URL + '/buzz';
            return this.delayedHttpService.sendDelayedHttpRequest(url);
        };
        EV3SoundAdapterService.prototype.beep = function () {
            var url = this.BASE_URL + '/beep';
            return this.delayedHttpService.sendDelayedHttpRequest(url);
        };
        EV3SoundAdapterService.IID = "EV3SoundAdapterService";
        EV3SoundAdapterService.$inject = ["DelayedHttpService"];
        return EV3SoundAdapterService;
    })();
    BinarisEV3.EV3SoundAdapterService = EV3SoundAdapterService;
})(BinarisEV3 || (BinarisEV3 = {}));
