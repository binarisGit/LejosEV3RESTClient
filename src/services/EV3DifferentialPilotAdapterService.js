var BinarisEV3;
(function (BinarisEV3) {
    var EV3DifferentialPilotAdapterService = (function () {
        function EV3DifferentialPilotAdapterService($http) {
            this.BASE_URL = "10.0.0";
            this.http = $http;
        }
        EV3DifferentialPilotAdapterService.prototype.run = function (distance) {
            return this.http.get(this.BASE_URL + '/run/' + distance);
        };
        EV3DifferentialPilotAdapterService.prototype.rotate = function (degrees) {
            return this.http.get(this.BASE_URL + '/rotate/' + degrees);
        };
        EV3DifferentialPilotAdapterService.prototype.buzz = function () {
            return this.http.get(this.BASE_URL + '/buzz');
        };
        EV3DifferentialPilotAdapterService.prototype.beep = function () {
            return this.http.get(this.BASE_URL + '/beep');
        };
        return EV3DifferentialPilotAdapterService;
    })();
    BinarisEV3.EV3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
})(BinarisEV3 || (BinarisEV3 = {}));
