var BinarisEV3;
(function (BinarisEV3) {
    var ev3DifferentialPilotModule = angular.module('binarisEV3DifferentialPilot', []);
    ev3DifferentialPilotModule.service('EV3DifferentialPilotAdapterService', BinarisEV3.EV3DifferentialPilotAdapterService);
    ev3DifferentialPilotModule.service('EV3SoundAdapterService', BinarisEV3.EV3SoundAdapterService);
    ev3DifferentialPilotModule.service('EV3ColorAdapterService', BinarisEV3.EV3ColorAdapterService);
    ev3DifferentialPilotModule.service('BaseBallBewegungsArtenService', BinarisEV3.BaseBallBewegungsArtenService);
    ev3DifferentialPilotModule.service('BaseBallAktionenService', BinarisEV3.BaseBallAktionenService);
    ev3DifferentialPilotModule.service('BaseBallTrainingsUebungService', BinarisEV3.BaseBallTrainingsUebungService);
    ev3DifferentialPilotModule.controller('MainController', BinarisEV3.MainController);
    ev3DifferentialPilotModule.controller('EV3RemoteController', BinarisEV3.EV3RemoteController);
})(BinarisEV3 || (BinarisEV3 = {}));
