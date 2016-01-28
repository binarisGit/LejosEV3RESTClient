import ITrainingsUebungService = require("../../api/ITrainingsUebungService");
import ISportBewegungsArtenService = require("../../api/ISportBewegungsArtenService");

class BaseBallTrainingsUebungService implements ITrainingsUebungService {
    static IID = "BaseBallTrainingsUebungService";
    private baseBallBewegungsArtenService: ISportBewegungsArtenService;

    static $inject = ["BaseBallBewegungsArtenService"];

    constructor(BaseBallBewegungsArtenService: ISportBewegungsArtenService) {
        this.baseBallBewegungsArtenService = BaseBallBewegungsArtenService;
    }

    public tippeln(): ng.IPromise<any> {
        var TIPPEL_SCHRITT_DISTANZ = 4;
        return this.baseBallBewegungsArtenService.laufen(TIPPEL_SCHRITT_DISTANZ).then(()=> {
            return this.baseBallBewegungsArtenService.laufen(-TIPPEL_SCHRITT_DISTANZ);
        }).then(()=> {
            return this.baseBallBewegungsArtenService.laufen(TIPPEL_SCHRITT_DISTANZ);
        });
    }

    public schlaegerSchwingen(): ng.IPromise<any> {
        return this.baseBallBewegungsArtenService.linksWenden().then(()=> {
            return this.baseBallBewegungsArtenService.rechtsWenden();
        });
    }
}

export = BaseBallTrainingsUebungService;
