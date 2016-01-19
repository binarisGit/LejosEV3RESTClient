var BinarisEV3;
(function (BinarisEV3) {
    var EV3SoundAdapterService = (function () {
        function EV3SoundAdapterService($http) {
            this.BASE_URL = "http://10.0.0.44:8080/sound";
            this.httpService = $http;
        }
        EV3SoundAdapterService.prototype.buzz = function () {
            var url = this.BASE_URL + '/buzz';
            return this.httpService.get(url);
        };
        EV3SoundAdapterService.prototype.beep = function () {
            var url = this.BASE_URL + '/beep';
            return this.httpService.get(url);
        };
        EV3SoundAdapterService.$inject = ["$http"];
        return EV3SoundAdapterService;
    })();
    BinarisEV3.EV3SoundAdapterService = EV3SoundAdapterService;
})(BinarisEV3 || (BinarisEV3 = {}));
