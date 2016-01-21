describe("BaseBallAktionen Integration test suite: ", function () {
    var baseBallAktionenService;
    beforeEach(angular.mock.module('binarisEV3DifferentialPilot'));
    beforeEach(function () {
        var $injector = angular.injector(['ng', 'binarisEV3DifferentialPilot']);
        baseBallAktionenService = $injector.get("BaseBallAktionenService");
    });
    it("es wird ein zustimmendes handzeichen ausgeführt", function (done) {
        baseBallAktionenService.gibtZustimmendesHandzeichen().then(function (response) {
            expect(response.status).toBe(200);
            done();
        });
    });
    it("es wird ein ablehnendes handzeichen ausgeführt", function (done) {
        baseBallAktionenService.gibtAblehnendesHandzeichen().then(function (response) {
            expect(response.status).toBe(200);
            done();
        });
    });
    it("schaut weiße base an", function (done) {
        baseBallAktionenService.schaueBaseAn().then(function (response) {
            expect(response.data.color).toBe(6);
            expect(response.status).toBe(200);
            done();
        });
    });
});
