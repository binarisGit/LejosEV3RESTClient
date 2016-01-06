var BinarisEV3;
(function (BinarisEV3) {
    var EV3RemoteController = (function () {
        function EV3RemoteController($scope, EV3DifferentialPilotAdapterService) {
            this.actionList = [];
            this.$scope = $scope;
            this.ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
        }
        EV3RemoteController.prototype.run = function (distance) {
            console.log("controller: run");
            return this.ev3DifferentialPilotAdapterService.run(10);
        };
        EV3RemoteController.prototype.rotate = function (degrees) {
            console.log("controller: rotate");
            return this.ev3DifferentialPilotAdapterService.rotate(45);
        };
        EV3RemoteController.prototype.buzz = function () {
            console.log("controller: buzz");
            return this.ev3DifferentialPilotAdapterService.buzz();
        };
        EV3RemoteController.prototype.beep = function () {
            console.log("controller: beep");
            return this.ev3DifferentialPilotAdapterService.beep();
        };
        EV3RemoteController.prototype.getNumberOfActions = function () {
            return this.actionList.length;
        };
        EV3RemoteController.prototype.addAction = function (action) {
            this.actionList.push(action);
        };
        return EV3RemoteController;
    })();
    BinarisEV3.EV3RemoteController = EV3RemoteController;
})(BinarisEV3 || (BinarisEV3 = {}));
