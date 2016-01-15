var BinarisEV3;
(function (BinarisEV3) {
    var EV3ColorAdapterService = (function () {
        function EV3ColorAdapterService(DelayedHttpService) {
            this.BASE_URL = "http://10.0.0.44:8080/color";
            this.delayedHttpService = DelayedHttpService;
        }
        EV3ColorAdapterService.prototype.getColor = function () {
            var url = this.BASE_URL + '/getcolor';
            return this.delayedHttpService.sendDelayedHttpRequest(url);
        };
        EV3ColorAdapterService.IID = "EV3ColorAdapterService";
        EV3ColorAdapterService.$inject = ["DelayedHttpService"];
        return EV3ColorAdapterService;
    })();
    BinarisEV3.EV3ColorAdapterService = EV3ColorAdapterService;
})(BinarisEV3 || (BinarisEV3 = {}));
