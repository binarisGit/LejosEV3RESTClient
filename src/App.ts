namespace BinarisEV3 {
    var ev3DifferentialPilotModule: ng.IModule = angular.module('binarisEV3DifferentialPilot', []);
    ev3DifferentialPilotModule.service('EV3DifferentialPilotAdapterService', EV3DifferentialPilotAdapterService);
    ev3DifferentialPilotModule.service('BaseBallBewegungsartenService', BaseBallBewegungsartenService);
    ev3DifferentialPilotModule.controller('EV3RemoteController', EV3RemoteController);
}