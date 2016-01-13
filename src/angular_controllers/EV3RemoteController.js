var BinarisEV3;
(function (BinarisEV3) {
    var EV3RemoteController = (function () {
        function EV3RemoteController($scope, DelayedHttpService, EV3DifferentialPilotAdapterService, EV3SoundAdapterService) {
            this.actionList = [];
            this.$scope = $scope;
            this.delayedHttpService = DelayedHttpService;
            this.ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
            this.ev3SoundAdapterService = EV3SoundAdapterService;
        }
        EV3RemoteController.prototype.run = function (distance) {
            console.log("controller: run");
            this.delayedHttpService.resetHttpSendDelay();
            return this.ev3DifferentialPilotAdapterService.run(10);
        };
        EV3RemoteController.prototype.rotate = function (degrees) {
            console.log("controller: rotate");
            this.delayedHttpService.resetHttpSendDelay();
            return this.ev3DifferentialPilotAdapterService.rotate(45);
        };
        EV3RemoteController.prototype.buzz = function () {
            this.delayedHttpService.resetHttpSendDelay();
            console.log("controller: buzz");
            return this.ev3SoundAdapterService.buzz();
        };
        EV3RemoteController.prototype.beep = function () {
            this.delayedHttpService.resetHttpSendDelay();
            console.log("controller: beep");
            return this.ev3SoundAdapterService.beep();
        };
        EV3RemoteController.prototype.getNumberOfActions = function () {
            return this.actionList.length;
        };
        EV3RemoteController.prototype.addAction = function (action) {
            this.actionList.push(action);
        };
        EV3RemoteController.prototype.clearActionList = function () {
            this.actionList = [];
        };
        EV3RemoteController.$inject = ["$scope", "DelayedHttpService", "EV3DifferentialPilotAdapterService", "EV3SoundAdapterService"];
        return EV3RemoteController;
    })();
    BinarisEV3.EV3RemoteController = EV3RemoteController;
})(BinarisEV3 || (BinarisEV3 = {}));
