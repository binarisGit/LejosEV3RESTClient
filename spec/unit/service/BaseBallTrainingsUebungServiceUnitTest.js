describe("TrainingsUebung Unit test suite: ", function () {
    var baseBallTrainingsUebungService;
    var baseBallBewegungsArtenService;
    beforeEach(angular.mock.module('binarisEV3DifferentialPilot'));
    beforeEach(function () {
        angular.mock.inject(function ($injector, BaseBallBewegungsArtenService) {
            baseBallBewegungsArtenService = BaseBallBewegungsArtenService;
            baseBallTrainingsUebungService = new BinarisEV3.BaseBallTrainingsUebungService(baseBallBewegungsArtenService);
        });
    });
});
