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

    it("baseball spieler tippelt", () => {
        spyOn(baseBallBewegungsArtenService, 'laufen');
        baseBallTrainingsUebungService.tippeln();
        expect(baseBallBewegungsArtenService.laufen).toHaveBeenCalledWith(1);
        expect(baseBallBewegungsArtenService.laufen).toHaveBeenCalledWith(-1);
        expect(baseBallBewegungsArtenService.laufen).toHaveBeenCalledWith(1);
    });


    it("baseball spieler uebt schwingen des schlaegers", () => {
        spyOn(baseBallBewegungsArtenService, 'schlaegerSchwingen');
        baseBallTrainingsUebungService.schlaegerSchwingen();
        expect(baseBallBewegungsArtenService.linksWenden).toHaveBeenCalled();
        expect(baseBallBewegungsArtenService.rechtsWenden).toHaveBeenCalled();
    });


});