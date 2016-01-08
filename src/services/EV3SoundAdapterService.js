var BinarisEV3;
(function (BinarisEV3) {
    var EV3SoundAdapterService = (function () {
        function EV3SoundAdapterService($http) {
            this.BASE_URL = "http://10.0.0.44:8080/differentpilot";
            this.http = $http;
        }
        EV3SoundAdapterService.prototype.buzz = function () {
            return this.http.get(this.BASE_URL + '/buzz');
        };
        EV3SoundAdapterService.prototype.beep = function () {
            return this.http.get(this.BASE_URL + '/beep');
        };
        EV3SoundAdapterService.IID = "EV3SoundAdapterService";
        EV3SoundAdapterService.$inject = ["$http"];
        return EV3SoundAdapterService;
    })();
    BinarisEV3.EV3SoundAdapterService = EV3SoundAdapterService;
})(BinarisEV3 || (BinarisEV3 = {}));
