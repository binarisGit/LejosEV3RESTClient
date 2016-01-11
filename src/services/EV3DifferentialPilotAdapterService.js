var BinarisEV3;
(function (BinarisEV3) {
    var EV3DifferentialPilotAdapterService = (function () {
        function EV3DifferentialPilotAdapterService(DelayedHttpService) {
            this.BASE_URL = "http://10.0.0.44:8080/differentpilot";
            this.delayedHttpService = DelayedHttpService;
        }
        EV3DifferentialPilotAdapterService.prototype.run = function (distance) {
            var url = this.BASE_URL + '/run/' + distance;
            return this.delayedHttpService.sendDelayedHttpRequest(url);
        };
        EV3DifferentialPilotAdapterService.prototype.rotate = function (degrees) {
            var url = this.BASE_URL + '/rotate/' + degrees;
            return this.delayedHttpService.sendDelayedHttpRequest(url);
        };
        EV3DifferentialPilotAdapterService.prototype.stop = function () {
            var url = this.BASE_URL + '/stop';
            return this.delayedHttpService.sendDelayedHttpRequest(url);
        };
        EV3DifferentialPilotAdapterService.IID = "EV3DifferentialPilotAdapterService";
        EV3DifferentialPilotAdapterService.$inject = ["DelayedHttpService"];
        return EV3DifferentialPilotAdapterService;
    })();
    BinarisEV3.EV3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
})(BinarisEV3 || (BinarisEV3 = {}));
