var BinarisEV3;
(function (BinarisEV3) {
    var EV3ColorAdapterService = (function () {
        function EV3ColorAdapterService(DelayedHttpService, $interval, $q) {
            this.BASE_URL = "http://10.0.0.44:8080/color";
            this.delayedHttpService = DelayedHttpService;
            this.intervalService = $interval;
            this.qService = $q;
            console.log($q);
        }
        EV3ColorAdapterService.prototype.getColor = function () {
            var url = this.BASE_URL + '/getcolor';
            return this.delayedHttpService.sendDelayedHttpRequest(url);
        };
        EV3ColorAdapterService.prototype.getSpecificColor = function () {
            var colorCode = 5;
            var url = this.BASE_URL + '/getcolor';
            var delayedHttpService = this.delayedHttpService;
            var qService = this.qService;
            getColor(null).then(function (promise) {
                this.getColor();
                if (promise.data.color === colorCode) {
                    console.log("color matches!");
                    return qService.reject('some error occured');
                }
                else {
                    return delayedHttpService.sendDelayedHttpRequest(url);
                }
            });
            function checkColor(color) {
                var deferred = qService.defer();
                var newPromise = deferred.promise;
                if (color != 13) {
                    console.log("color does not match. Sending next request...");
                    delayedHttpService.sendDelayedHttpRequest(url);
                    deferred.resolve(color);
                }
                else {
                    console.log("color matches. No further requests!");
                    deferred.reject(n);
                }
            }
        };
        EV3ColorAdapterService.IID = "EV3ColorAdapterService";
        EV3ColorAdapterService.$inject = ["DelayedHttpService", "$interval", "$q"];
        return EV3ColorAdapterService;
    })();
    BinarisEV3.EV3ColorAdapterService = EV3ColorAdapterService;
})(BinarisEV3 || (BinarisEV3 = {}));
