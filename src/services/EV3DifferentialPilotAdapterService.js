var BinarisEV3;
(function (BinarisEV3) {
    var EV3DifferentialPilotAdapterService = (function () {
        function EV3DifferentialPilotAdapterService($http, $timeout) {
            this.BASE_URL = "http://10.0.0.44:8080/differentpilot";
            this.delay = 1000;
            this.http = $http;
            this.timeout = $timeout;
        }
        EV3DifferentialPilotAdapterService.prototype.sendDelayedHttpRequest = function (url) {
            this.delay = this.delay + 1000;
            var http = this.http;
            this.timeout(function () {
                http.get(url);
            }, this.delay);
        };
        EV3DifferentialPilotAdapterService.prototype.resetHttpSendDelay = function () {
            this.delay = 1000;
        };
        EV3DifferentialPilotAdapterService.prototype.run = function (distance) {
            var url = this.BASE_URL + '/run/' + distance;
            this.sendDelayedHttpRequest(url);
            return 999;
        };
        EV3DifferentialPilotAdapterService.prototype.rotate = function (degrees) {
            var url = this.BASE_URL + '/rotate/' + degrees;
            this.sendDelayedHttpRequest(url);
            return 999;
        };
        EV3DifferentialPilotAdapterService.prototype.stop = function () {
            var url = this.BASE_URL + '/stop';
            this.sendDelayedHttpRequest(url);
            return 999;
        };
        EV3DifferentialPilotAdapterService.IID = "EV3DifferentialPilotAdapterService";
        EV3DifferentialPilotAdapterService.$inject = ["$http", "$timeout"];
        return EV3DifferentialPilotAdapterService;
    })();
    BinarisEV3.EV3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
})(BinarisEV3 || (BinarisEV3 = {}));
