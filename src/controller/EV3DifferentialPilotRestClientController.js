var BinarisEV3;
(function (BinarisEV3) {
    var EV3DifferentialPilotRestClientController = (function () {
        function EV3DifferentialPilotRestClientController($scope, EV3DifferentialPilotRestClient) {
            this.$scope = $scope;
            this.ev3DifferentialPilotRestClient = EV3DifferentialPilotRestClient;
        }
        EV3DifferentialPilotRestClientController.prototype.run = function (distance) {
            this.ev3DifferentialPilotRestClient.run(10);
        };
        EV3DifferentialPilotRestClientController.prototype.rotate = function (degrees) {
            this.ev3DifferentialPilotRestClient.rotate(45);
        };
        EV3DifferentialPilotRestClientController.prototype.buzz = function () {
            this.ev3DifferentialPilotRestClient.buzz();
        };
        EV3DifferentialPilotRestClientController.prototype.beep = function () {
            this.ev3DifferentialPilotRestClient.beep();
        };
        return EV3DifferentialPilotRestClientController;
    })();
    BinarisEV3.EV3DifferentialPilotRestClientController = EV3DifferentialPilotRestClientController;
})(BinarisEV3 || (BinarisEV3 = {}));
//# sourceMappingURL=EV3DifferentialPilotRestClientController.js.map