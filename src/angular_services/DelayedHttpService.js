/**
 * Created by Christian on 11.01.2016.
 */
var BinarisEV3;
(function (BinarisEV3) {
    var DelayedHttpService = (function () {
        function DelayedHttpService($http, $timeout) {
            this.DELAY_TIME = 100;
            this.delay = this.DELAY_TIME;
            this.http = $http;
            this.timeout = $timeout;
        }
        DelayedHttpService.prototype.sendDelayedHttpRequest = function (url) {
            console.log(this.delay);
            this.delay = this.delay + this.DELAY_TIME;
            console.log(url + " " + this.delay);
            var http = this.http;
            return this.timeout(function () {
                console.log("sending request....");
                return http.get(url);
            }, this.delay);
        };
        DelayedHttpService.prototype.resetHttpSendDelay = function () {
            this.delay = this.DELAY_TIME;
        };
        DelayedHttpService.$inject = ["$http", "$timeout"];
        return DelayedHttpService;
    })();
    BinarisEV3.DelayedHttpService = DelayedHttpService;
})(BinarisEV3 || (BinarisEV3 = {}));
