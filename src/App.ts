namespace BinarisEV3 {
    var ev3DifferentialPilotModule: ng.IModule = angular.module('binarisEV3DifferentialPilot', []);
    ev3DifferentialPilotModule.service('EV3DifferentialPilotAdapterService', EV3DifferentialPilotAdapterService);
    ev3DifferentialPilotModule.service('EV3SoundAdapterService', EV3SoundAdapterService);
    ev3DifferentialPilotModule.service('BaseBallBewegungsArtenService', BaseBallBewegungsArtenService);
    ev3DifferentialPilotModule.service('BaseBallAktionenService', BaseBallAktionenService);
    ev3DifferentialPilotModule.service('BaseBallTrainingsUebungService', BaseBallTrainingsUebungService);
    ev3DifferentialPilotModule.controller('EV3RemoteController', EV3RemoteController);
}