import EV3DifferentialPilotAdapterService = require("./angular_services/EV3DifferentialPilotAdapterService");
import EV3SoundAdapterService = require("./angular_services/EV3SoundAdapterService");
import EV3ColorAdapterService = require("./angular_services/EV3ColorAdapterService");
import BaseBallBewegungsArtenService = require("./angular_services/examples/BaseBallBewegungsartenService");
import BaseBallAktionenService = require("./angular_services/examples/BaseBallAktionenService");
import BaseBallTrainingsUebungService = require("./angular_services/examples/BaseBallTrainingsUebungService");
import MainController = require("./angular_controllers/MainController");
import EV3RemoteController = require("./angular_controllers/EV3RemoteController");

var ev3DifferentialPilotModule: ng.IModule = angular.module('binarisEV3DifferentialPilot', []);
ev3DifferentialPilotModule.service('EV3DifferentialPilotAdapterService', EV3DifferentialPilotAdapterService);
ev3DifferentialPilotModule.service('EV3SoundAdapterService', EV3SoundAdapterService);
ev3DifferentialPilotModule.service('EV3ColorAdapterService', EV3ColorAdapterService);
ev3DifferentialPilotModule.service('BaseBallBewegungsArtenService', BaseBallBewegungsArtenService);
ev3DifferentialPilotModule.service('BaseBallAktionenService', BaseBallAktionenService);
ev3DifferentialPilotModule.service('BaseBallTrainingsUebungService', BaseBallTrainingsUebungService);
ev3DifferentialPilotModule.controller('MainController', MainController);
ev3DifferentialPilotModule.controller('EV3RemoteController', EV3RemoteController);
