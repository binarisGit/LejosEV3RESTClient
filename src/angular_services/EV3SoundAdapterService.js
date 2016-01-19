var BinarisEV3;
(function (BinarisEV3) {
    var EV3SoundAdapterService = (function () {
        function EV3SoundAdapterService($http) {
            this.SOUND_ENDPOINT_URL = BinarisEV3.AppConfig.BASE_URL + "sound";
            this.httpService = $http;
        }
        EV3SoundAdapterService.prototype.buzz = function () {
            var url = this.SOUND_ENDPOINT_URL + '/buzz';
            return this.httpService.get(url);
        };
        EV3SoundAdapterService.prototype.beep = function () {
            var url = this.SOUND_ENDPOINT_URL + '/beep';
            return this.httpService.get(url);
        };
        EV3SoundAdapterService.$inject = ["$http"];
        return EV3SoundAdapterService;
    })();
    BinarisEV3.EV3SoundAdapterService = EV3SoundAdapterService;
})(BinarisEV3 || (BinarisEV3 = {}));
