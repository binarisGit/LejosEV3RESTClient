describe("EV3SoundAdapter Unit test suite with asynchronous HTTP Requests: ", function () {
    var ev3SoundAdapterService;
    var $httpBackend;
    beforeEach(function () {
        var $injector = angular.injector(['ng', 'ngMockE2E', 'binarisEV3DifferentialPilot']);
        $httpBackend = $injector.get('$httpBackend');
        ev3SoundAdapterService = $injector.get('EV3SoundAdapterService');
        $httpBackend.when('GET', 'http://10.0.0.44:8080/differentpilot/beep').respond(200, '');
        $httpBackend.when('GET', 'http://10.0.0.44:8080/differentpilot/buzz').respond(200, '');
    });
    it("should perform a REAL http-Request to the 'beep'-endpoint and get a FAKE RESPONSE from $httpBackend mock", function (done) {
        ev3SoundAdapterService.beep().then(function successCallback(response) {
            console.log('success! Robot beeps!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response) {
            console.log('error... beeping failed.');
            done();
        });
    });
    it("should perform a REAL http-Request to the 'beep'-endpoint and get a FAKE RESPONSE from $httpBackend mock", function (done) {
        ev3SoundAdapterService.buzz().then(function successCallback(response) {
            console.log('success! Robot buzzes!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response) {
            console.log('error... buzzing failed.');
            done();
        });
    });
});
