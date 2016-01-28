import ISportBewegungsArtenService = require("../../../src/api/ISportBewegungsArtenService");
import BaseBallTrainingsUebungService = require("../../../src/angular_services/examples/BaseBallTrainingsUebungService");

describe("TrainingsUebung Unit test suite: ", () => {
    // SUT
    var baseBallTrainingsUebungService: any;

    // DOC
    var baseBallBewegungsArtenService: any;

    beforeEach(angular.mock.module('binarisEV3DifferentialPilot'));

    beforeEach(() => {
        angular.mock.inject(function ($injector: any, BaseBallBewegungsArtenService: ISportBewegungsArtenService) {
            baseBallBewegungsArtenService = BaseBallBewegungsArtenService;
            baseBallTrainingsUebungService = new BaseBallTrainingsUebungService(baseBallBewegungsArtenService);
        });
    });

});