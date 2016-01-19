var BinarisEV3;
(function (BinarisEV3) {
    var EV3RemoteController = (function () {
        function EV3RemoteController($scope, EV3DifferentialPilotAdapterService, EV3SoundAdapterService, EV3ColorAdapterService) {
            this.actionList = [];
            this.$scope = $scope;
            this.ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
            this.ev3SoundAdapterService = EV3SoundAdapterService;
            this.ev3ColorAdapterService = EV3ColorAdapterService;
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
            return this.ev3SoundAdapterService.buzz();
        };
        EV3RemoteController.prototype.getColor = function () {
            console.log("controller: getColor");
            var promise = this.ev3ColorAdapterService.getColor().then(function successCallback(response) {
                console.log("Farbcode: " + response.data.color);
            }, function errorCallback(response) {
                console.log("Farbe konnte nicht ermittelt werden. Status:");
                console.log(response.status);
            });
            return promise;
        };
        EV3RemoteController.prototype.beep = function () {
            console.log("controller: beep");
            return this.ev3SoundAdapterService.beep();
        };
        EV3RemoteController.$inject = ["$scope", "EV3DifferentialPilotAdapterService", "EV3SoundAdapterService", "EV3ColorAdapterService"];
        return EV3RemoteController;
    })();
    BinarisEV3.EV3RemoteController = EV3RemoteController;
})(BinarisEV3 || (BinarisEV3 = {}));
