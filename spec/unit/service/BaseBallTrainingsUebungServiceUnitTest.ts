import ITrainingsUebungService = BinarisEV3.ITrainingsUebungService;
import ISportBewegungsArtenService = BinarisEV3.ISportBewegungsArtenService;
describe("TrainingsUebung Unit test suite: ", () => {

    // SUT
    var baseBallTrainingsUebungService: any;

    // DOC
    var baseBallBewegungsArtenService: any;

    beforeEach(angular.mock.module('binarisEV3DifferentialPilot'));

    beforeEach(() => {
        angular.mock.inject(function ($injector: any, BaseBallBewegungsArtenService: ISportBewegungsArtenService) {
            baseBallBewegungsArtenService = BaseBallBewegungsArtenService;
            baseBallTrainingsUebungService = new BinarisEV3.BaseBallTrainingsUebungService(baseBallBewegungsArtenService);
        });
    });




});