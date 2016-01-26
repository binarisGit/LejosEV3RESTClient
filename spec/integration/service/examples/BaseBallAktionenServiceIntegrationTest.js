describe("BaseBallAktionen Integration test suite: ", function () {
    var baseBallAktionenService;
    beforeEach(angular.mock.module('binarisEV3DifferentialPilot'));
    beforeEach(function () {
        var $injector = angular.injector(['ng', 'binarisEV3DifferentialPilot']);
        baseBallAktionenService = $injector.get("BaseBallAktionenService");
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
    });
    xit("es wird ein zustimmendes handzeichen ausgeführt", function (done) {
        baseBallAktionenService.gibtZustimmendesHandzeichen().then(function (response) {
            expect(response.status).toBe(204);
            done();
        });
    });
    xit("es wird ein ablehnendes handzeichen ausgeführt", function (done) {
        baseBallAktionenService.gibtAblehnendesHandzeichen().then(function (response) {
            expect(response.status).toBe(204);
            done();
        });
    });
    xit("schaut weiße base an", function (done) {
        baseBallAktionenService.schaueBaseAn().then(function (response) {
            expect(response.data).toBe('6');
            expect(response.status).toBe(200);
            done();
        });
    });
    xit("gehe zur nächsten base", function (done) {
        baseBallAktionenService.geheZurNaechstenBase().then(function (response) {
            console.log("called done...");
            done();
        });
    });
    it("laufe 60cm vorwärts und laufe wieder zurück", function (done) {
        baseBallAktionenService.laufeVorwaertsUndZurueck(60).then(function (response) {
            expect(response.status).toBe(204);
            done();
        });
    });
});
