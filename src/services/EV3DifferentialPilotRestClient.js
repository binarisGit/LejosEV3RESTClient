var BinarisEV3;
(function (BinarisEV3) {
    var EV3DifferentialPilotRestClient = (function () {
        function EV3DifferentialPilotRestClient($http) {
            this.BASE_URL = "10.0.0.44:8080";
            this.http = $http;
        }
        EV3DifferentialPilotRestClient.prototype.run = function (distance) {
            console.log(this.BASE_URL + '/run/' + distance);
            return this.http.get(this.BASE_URL + '/run/' + distance);
        };
        EV3DifferentialPilotRestClient.prototype.rotate = function (degrees) {
            return this.http.get(this.BASE_URL + '/rotate/' + degrees);
        };
        EV3DifferentialPilotRestClient.prototype.buzz = function () {
            return this.http.get(this.BASE_URL + '/buzz');
        };
        EV3DifferentialPilotRestClient.prototype.beep = function () {
            return this.http.get(this.BASE_URL + '/beep');
        };
        return EV3DifferentialPilotRestClient;
    })();
    BinarisEV3.EV3DifferentialPilotRestClient = EV3DifferentialPilotRestClient;
})(BinarisEV3 || (BinarisEV3 = {}));
//# sourceMappingURL=EV3DifferentialPilotRestClient.js.map