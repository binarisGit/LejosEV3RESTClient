import IPromise = angular.IPromise;
describe("BaseBallAktionen Integration test suite: ", function () {

    // SUT
    var baseBallAktionenService:any;

    beforeEach(angular.mock.module('binarisEV3DifferentialPilot'));

    beforeEach(function () {
        var $injector = angular.injector(['ng', 'binarisEV3DifferentialPilot']);
        baseBallAktionenService = $injector.get("BaseBallAktionenService");
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
    });

    xit("es wird ein zustimmendes handzeichen ausgeführt", function (done) {
        baseBallAktionenService.gibtZustimmendesHandzeichen().then((response:any)=> {
            expect(response.status).toBe(204);
            done();
        });
    });

    xit("es wird ein ablehnendes handzeichen ausgeführt", function (done) {
        baseBallAktionenService.gibtAblehnendesHandzeichen().then((response:any)=> {
            expect(response.status).toBe(204);
            done();
        });
    });

    xit("schaut weiße base an", function (done) {
        baseBallAktionenService.schaueBaseAn().then((response:any)=> {
            expect(response.data).toBe('6');
            expect(response.status).toBe(200);
            done();
        });
    });

    xit("gehe zur nächsten base", (done) => {
        baseBallAktionenService.geheZurNaechstenBase().then((response:any) => {
            console.log("called done...");
            done();
        });
    });

    it("laufe 60cm vorwärts und laufe wieder zurück", (done) => {
        baseBallAktionenService.laufeVorwaertsUndZurueck(60).then((response:any) => {
            expect(response.status).toBe(204);
            done();
        });
    });
});