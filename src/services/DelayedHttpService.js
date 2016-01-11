/**
 * Created by Christian on 11.01.2016.
 */
var BinarisEV3;
(function (BinarisEV3) {
    var DelayedHttpService = (function () {
        function DelayedHttpService($http, $timeout) {
            this.delay = 1000;
            this.http = $http;
            this.timeout = $timeout;
        }
        DelayedHttpService.prototype.sendDelayedHttpRequest = function (url) {
            this.delay = this.delay + 1000;
            var http = this.http;
            this.timeout(function () {
                http.get(url);
            }, this.delay);
        };
        DelayedHttpService.prototype.resetHttpSendDelay = function () {
            this.delay = 1000;
        };
        DelayedHttpService.$inject = ["$http", "$timeout"];
        return DelayedHttpService;
    })();
    BinarisEV3.DelayedHttpService = DelayedHttpService;
})(BinarisEV3 || (BinarisEV3 = {}));
