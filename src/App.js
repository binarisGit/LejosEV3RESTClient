var BinarisEV3;
(function (BinarisEV3) {
    var ev3DifferentialPilotModule = angular.module('binarisEV3DifferentialPilot', []);
    ev3DifferentialPilotModule.service('EV3DifferentialPilotRestClient', BinarisEV3.EV3DifferentialPilotAdapterService);
    ev3DifferentialPilotModule.controller('EV3RemoteController', BinarisEV3.EV3RemoteController);
})(BinarisEV3 || (BinarisEV3 = {}));
