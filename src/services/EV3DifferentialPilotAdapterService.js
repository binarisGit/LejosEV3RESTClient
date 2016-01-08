var BinarisEV3;
(function (BinarisEV3) {
    var EV3DifferentialPilotAdapterService = (function () {
        function EV3DifferentialPilotAdapterService($http) {
            this.BASE_URL = "http://10.0.0.44:8080/differentpilot";
            this.http = $http;
        }
        EV3DifferentialPilotAdapterService.prototype.run = function (distance) {
            return this.http.get(this.BASE_URL + '/run/' + distance);
        };
        EV3DifferentialPilotAdapterService.prototype.rotate = function (degrees) {
            return this.http.get(this.BASE_URL + '/rotate/' + degrees);
        };
        EV3DifferentialPilotAdapterService.prototype.stop = function () {
            return this.http.get(this.BASE_URL + '/stop');
        };
        return EV3DifferentialPilotAdapterService;
    })();
    BinarisEV3.EV3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
})(BinarisEV3 || (BinarisEV3 = {}));
