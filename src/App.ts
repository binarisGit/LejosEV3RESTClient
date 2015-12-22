namespace BinarisEV3 {

    var ev3DifferentialPilotModule: ng.IModule = angular.module('binarisEV3DifferentialPilot', []);
    ev3DifferentialPilotModule.service('EV3DifferentialPilotRestClient',EV3DifferentialPilotRestClient);

}