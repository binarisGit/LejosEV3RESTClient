var BinarisEV3;
(function (BinarisEV3) {
    var EV3RestService = (function () {
        function EV3RestService($http) {
            this.BASE_URL = "10.0.0.44:8080/someEntryPoint";
            this.http = $http;
        }
        EV3RestService.prototype.run = function (distance) {
            return this.http.get(this.BASE_URL + '/run/' + distance);
        };
        EV3RestService.prototype.rotate = function (degrees) {
            return this.http.get(this.BASE_URL + '/rotate/' + degrees);
        };
        EV3RestService.prototype.buzz = function () {
            return this.http.get(this.BASE_URL + '/rotate');
        };
        EV3RestService.prototype.beep = function () {
            return this.http.get(this.BASE_URL + '/rotate');
        };
        return EV3RestService;
    })();
    BinarisEV3.EV3RestService = EV3RestService;
})(BinarisEV3 || (BinarisEV3 = {}));
//# sourceMappingURL=ev3RestService.js.map