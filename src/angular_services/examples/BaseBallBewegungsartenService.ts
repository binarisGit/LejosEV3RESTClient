import ISportBewegungsArtenService = require("../../api/ISportBewegungsArtenService");
import IDifferentialPilotAdapterService = require("../../third_apis/IDifferentialPilotAdapterService");
import EV3DifferentialPilotAdapterService = require("../EV3DifferentialPilotAdapterService");

class BaseBallBewegungsArtenService implements ISportBewegungsArtenService {
    static IID = "BaseBallBewegungsArtenService";
    private ev3DifferentialPilotAdapterService: IDifferentialPilotAdapterService;
    static $inject = [EV3DifferentialPilotAdapterService.IID];

    constructor(EV3DifferentialPilotAdapterService: IDifferentialPilotAdapterService) {
        this.ev3DifferentialPilotAdapterService = EV3DifferentialPilotAdapterService;
    }

    public laufen(laufstrecke: number): ng.IPromise<any> {
        return this.ev3DifferentialPilotAdapterService.run(laufstrecke);
    }

    public anhalten(): ng.IPromise<any> {
        return this.ev3DifferentialPilotAdapterService.stop();
    }

    public linksWenden(): ng.IPromise<any> {
        return this.ev3DifferentialPilotAdapterService.rotate(90);
    }

    public rechtsWenden(): ng.IPromise<any> {
        return this.ev3DifferentialPilotAdapterService.rotate(-90);
    }
}
export = BaseBallBewegungsArtenService;
