describe("Unit test suite with asynchronous HTTP Requests: ", function () {
    var ev3DifferentialPilotAdapterService;
    var $httpBackend;
    beforeEach(function () {
        var $injector = angular.injector(['ng', 'ngMockE2E', 'binarisEV3DifferentialPilot']);
        $httpBackend = $injector.get('$httpBackend');
        ev3DifferentialPilotAdapterService = $injector.get('EV3DifferentialPilotAdapterService');
        $httpBackend.when('GET', '10.0.0.44:8080/run/10').respond(200, '');
        $httpBackend.when('GET', '10.0.0.44:8080/rotate/45').respond(200, '');
        $httpBackend.when('GET', '10.0.0.44:8080/beep').respond(200, '');
        $httpBackend.when('GET', '10.0.0.44:8080/buzz').respond(200, '');
        $httpBackend.when('GET', '10.0.0.44:8080/stop').respond(200, '');
    });
    it("should perform a REAL http-Request to the 'run'-endpoint and get a FAKE RESPONSE from $httpBackend mock", function (done) {
        ev3DifferentialPilotAdapterService.run(10).then(function successCallback(response) {
            console.log('success! Robot runs!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response) {
            console.log('error... running failed.');
            done();
        });
    });
    it("should perform a REAL http-Request to the 'rotate'-endpoint and get a FAKE RESPONSE from $httpBackend mock", function (done) {
        ev3DifferentialPilotAdapterService.rotate(45).then(function successCallback(response) {
            console.log('success! Robot rotates!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response) {
            console.log('error... rotating failed.');
            done();
        });
    });
    it("should perform a REAL http-Request to the 'beep'-endpoint and get a FAKE RESPONSE from $httpBackend mock", function (done) {
        ev3DifferentialPilotAdapterService.beep().then(function successCallback(response) {
            console.log('success! Robot beeps!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response) {
            console.log('error... beeping failed.');
            done();
        });
    });
    it("should perform a REAL http-Request to the 'beep'-endpoint and get a FAKE RESPONSE from $httpBackend mock", function (done) {
        ev3DifferentialPilotAdapterService.buzz().then(function successCallback(response) {
            console.log('success! Robot buzzes!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response) {
            console.log('error... buzzing failed.');
            done();
        });
    });
    it("should perform a REAL http-Request to the 'beep'-endpoint and get a FAKE RESPONSE from $httpBackend mock", function (done) {
        ev3DifferentialPilotAdapterService.stop().then(function successCallback(response) {
            console.log('success! Robot stops!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response) {
            console.log('error... stopping failed.');
            done();
        });
    });
});
