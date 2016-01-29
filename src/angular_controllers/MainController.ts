import IDifferentialPilotAdapterService = require("../third_apis/IDifferentialPilotAdapterService");
import ISoundAdapterService = require("../third_apis/ISoundAdapterService");
import IColorAdapterService = require("../third_apis/IColorAdapterService");
import ISportBewegungsArtenService = require("../api/ISportBewegungsArtenService");
import ITrainingsUebungService = require("../api/ITrainingsUebungService");
import IHttpService = angular.IHttpService;
import EV3DifferentialPilotAdapterService = require("../angular_services/EV3DifferentialPilotAdapterService");
import EV3SoundAdapterService = require("../angular_services/EV3SoundAdapterService");
import EV3ColorAdapterService = require("../angular_services/EV3ColorAdapterService");
import BaseBallBewegungsArtenService = require("../angular_services/examples/BaseBallBewegungsartenService");
import BaseBallTrainingsUebungService = require("../angular_services/examples/BaseBallTrainingsUebungService");

class MainController {
    static IID = "MainController";

    /*
     ===================================================
     Change name of red action-buttons in index.html:
     ===================================================
     */
    private defaultButtonName: string = "change button name in src/MainController.js";
    public SLOT_A_ACTION_NAME = "tippeln";
    public SLOT_B_ACTION_NAME = "schlaegerSchwingen";
    public SLOT_C_ACTION_NAME = "homeRun";
    public SLOT_D_ACTION_NAME = this.defaultButtonName;

    private $scope: ng.IScope;
    private ev3DifferentialPilotAdapterService: IDifferentialPilotAdapterService;
    private ev3SoundAdapterService: ISoundAdapterService;
    private ev3ColorAdapterService: IColorAdapterService;
    private baseBallBewegungsArten: ISportBewegungsArtenService;
    private baseBallTrainingsUebungService: ITrainingsUebungService;
    private httpService: IHttpService;

    static $inject = ["$scope", "$http", EV3DifferentialPilotAdapterService.IID, EV3SoundAdapterService.IID, EV3ColorAdapterService.IID, BaseBallBewegungsArtenService.IID, BaseBallTrainingsUebungService.IID];

    constructor($scope: ng.IScope, $http: IHttpService, EV3DifferentialPilotAdapterService: IDifferentialPilotAdapterService,
                EV3SoundAdapterService: ISoundAdapterService, EV3ColorAdapterService: IColorAdapterService,
                BaseBallBewegungsArtenService: ISportBewegungsArtenService, BaseBallTrainingsUebungService: ITrainingsUebungService) {
        this.$scope = $scope;
        this.httpService = $http;
        this.ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
        this.ev3SoundAdapterService = EV3SoundAdapterService;
        this.ev3ColorAdapterService = EV3ColorAdapterService;
        this.baseBallBewegungsArten = BaseBallBewegungsArtenService;
        this.baseBallTrainingsUebungService = BaseBallTrainingsUebungService;
    }

    /*
     ===================================================
     Add your code for red action-buttons in index.html:
     (do NOT alter function names!)
     You must use Promise-Chains so that all requests
     arrive sequentially at the server (see $q Service).
     ===================================================
     */

    public a() {
        this.baseBallTrainingsUebungService.tippeln();
    }

    public b() {
        this.baseBallTrainingsUebungService.schlaegerSchwingen();
    }

    public c() {
        // using the EV3DifferentialAdapter directly to perform a home run
        this.ev3DifferentialPilotAdapterService.run(40).then(() => {
            return this.ev3DifferentialPilotAdapterService.rotate(90);
        }).then(()=> {
            return this.ev3DifferentialPilotAdapterService.run(40);
        }).then(() => {
            return this.ev3DifferentialPilotAdapterService.rotate(90);
        }).then(() => {
            return this.ev3DifferentialPilotAdapterService.run(40);
        }).then(() => {
            return this.ev3DifferentialPilotAdapterService.rotate(90);
        }).then(() => {
            return this.ev3DifferentialPilotAdapterService.run(40);
        }).then(() => {
            return this.ev3SoundAdapterService.beep();
        });
    }

    public d() {
        alert("Keine Implementierung. Füge eine Implementierung im MainController.js ein.");
    }
}
export = MainController;
