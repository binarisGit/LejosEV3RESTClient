describe("DelayedHttpService Unit test suite with asynchronous HTTP Requests: ", function () {
    var delayedHttpService;
    var $httpBackend;
    beforeEach(function () {
        var $injector = angular.injector(['ng', 'ngMockE2E', 'binarisEV3DifferentialPilot']);
        $httpBackend = $injector.get('$httpBackend');
        delayedHttpService = $injector.get('DelayedHttpService');
        $httpBackend.when('GET', 'http://10.0.0.44:8080/differentpilot/run/10').respond(200, '');
        $httpBackend.when('GET', 'http://10.0.0.44:8080/differentpilot/rotate/45').respond(200, '');
    });
    it("should perform a REAL http-Request to the 'run'-endpoint and get a FAKE RESPONSE from $httpBackend mock", function (done) {
        var url = "http://10.0.0.44:8080/differentpilot/run/10";
        delayedHttpService.sendDelayedHttpRequest(url).then(function successCallback(response) {
            console.log('success! Robot runs!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response) {
            console.log('error... running failed.');
            done();
        });
    });
    it("should perform a REAL http-Request to the 'rotate'-endpoint and get a FAKE RESPONSE from $httpBackend mock", function (done) {
        var url = "http://10.0.0.44:8080/differentpilot/rotate/45";
        delayedHttpService.sendDelayedHttpRequest(url).then(function successCallback(response) {
            console.log('success! Robot runs!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response) {
            console.log('error... running failed.');
            done();
        });
    });
});
