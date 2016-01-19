var BinarisEV3;
(function (BinarisEV3) {
    var EV3DifferentialPilotAdapterService = (function () {
        function EV3DifferentialPilotAdapterService($http) {
            this.BASE_URL = "http://10.0.0.44:8080/differentialpilot";
            this.httpService = $http;
        }
        EV3DifferentialPilotAdapterService.prototype.run = function (distance) {
            var url = this.BASE_URL + '/run/' + distance;
            console.log(url);
            return this.httpService.get(url);
        };
        EV3DifferentialPilotAdapterService.prototype.rotate = function (degrees) {
            var url = this.BASE_URL + '/rotate/' + degrees;
            return this.httpService.get(url);
        };
        EV3DifferentialPilotAdapterService.prototype.stop = function () {
            var url = this.BASE_URL + '/stop';
            return this.httpService.get(url);
        };
        EV3DifferentialPilotAdapterService.$inject = ["$http"];
        return EV3DifferentialPilotAdapterService;
    })();
    BinarisEV3.EV3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
})(BinarisEV3 || (BinarisEV3 = {}));
