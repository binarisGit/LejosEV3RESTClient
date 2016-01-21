var BinarisEV3;
(function (BinarisEV3) {
    var EV3DifferentialPilotAdapterService = (function () {
        function EV3DifferentialPilotAdapterService($http) {
            this.PILOT_ENDPOINT_URL = BinarisEV3.AppConfig.BASE_URL + "differentialpilot";
            this.httpService = $http;
        }
        EV3DifferentialPilotAdapterService.prototype.run = function (distance) {
            var url = this.PILOT_ENDPOINT_URL + '/run/' + distance;
            return this.httpService.get(url);
        };
        EV3DifferentialPilotAdapterService.prototype.rotate = function (degrees) {
            var url = this.PILOT_ENDPOINT_URL + '/rotate/' + degrees;
            return this.httpService.get(url);
        };
        EV3DifferentialPilotAdapterService.prototype.stop = function () {
            var url = this.PILOT_ENDPOINT_URL + '/stop';
            return this.httpService.get(url);
        };
        EV3DifferentialPilotAdapterService.prototype.quickStop = function () {
            var url = this.PILOT_ENDPOINT_URL + '/quickStop';
            return this.httpService.get(url);
        };
        EV3DifferentialPilotAdapterService.prototype.getMovementIncrement = function () {
            var url = this.PILOT_ENDPOINT_URL + '/getmovementincrement';
            return this.httpService.get(url);
        };
        EV3DifferentialPilotAdapterService.$inject = ["$http"];
        return EV3DifferentialPilotAdapterService;
    })();
    BinarisEV3.EV3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
})(BinarisEV3 || (BinarisEV3 = {}));
