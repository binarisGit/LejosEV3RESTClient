describe("TrainingsUebung Unit test suite: ", function () {
    var baseBallTrainingsUebungService;
    var baseBallBewegungsArtenService;
    beforeEach(angular.mock.module('binarisEV3DifferentialPilot'));
    beforeEach(function () {
        angular.mock.inject(function ($injector, BaseBallBewegungsArtenService) {
            baseBallBewegungsArtenService = BaseBallBewegungsArtenService;
            baseBallTrainingsUebungService = new BinarisEV3.BaseBallTrainingsUebungService(baseBallBewegungsArtenService);
        });
        it("baseball spieler tippelt", function () {
            spyOn(baseBallBewegungsArtenService, 'tippeln');
            baseBallTrainingsUebungService.tippeln();
            expect(baseBallBewegungsArtenService.laufen).toHaveBeenCalledWith(baseBallBewegungsArtenService.TIPPEL_SCHRITT_DISTANZ);
            expect(baseBallBewegungsArtenService.laufen).toHaveBeenCalledWith(baseBallBewegungsArtenService.TIPPEL_SCHRITT_DISTANZ);
            expect(baseBallBewegungsArtenService.laufen).toHaveBeenCalledWith(baseBallBewegungsArtenService.TIPPEL_SCHRITT_DISTANZ);
        });
        it("baseball spieler uebt schwingen des schlaegers", function () {
            spyOn(baseBallBewegungsArtenService, 'schlaegerSchwingen');
            baseBallTrainingsUebungService.schlaegerSchwingen();
            expect(baseBallBewegungsArtenService.linksWenden).toHaveBeenCalled();
            expect(baseBallBewegungsArtenService.rechtsWenden).toHaveBeenCalled();
        });
    });
});
