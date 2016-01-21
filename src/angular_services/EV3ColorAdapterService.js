var BinarisEV3;
(function (BinarisEV3) {
    var EV3ColorAdapterService = (function () {
        function EV3ColorAdapterService($http) {
            this.COLOR_ENDPOINT_URL = BinarisEV3.AppConfig.BASE_URL + "color";
            this.httpService = $http;
        }
        EV3ColorAdapterService.prototype.getColor = function () {
            var url = this.COLOR_ENDPOINT_URL + '/getcolor';
            return this.httpService.get(url);
        };
        EV3ColorAdapterService.$inject = ["$http"];
        return EV3ColorAdapterService;
    })();
    BinarisEV3.EV3ColorAdapterService = EV3ColorAdapterService;
})(BinarisEV3 || (BinarisEV3 = {}));
