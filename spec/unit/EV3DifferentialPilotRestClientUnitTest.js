describe("Unit test suite with asynchronous HTTP Requests: ", function () {
    var ev3DifferentialPilotRestClient;
    var $http;
    var $httpBackend;
    beforeEach(function () {
        var $injector = angular.injector(['ng', 'ngMockE2E']);
        $httpBackend = $injector.get('$httpBackend');
        $http = $injector.get('$http');
        ev3DifferentialPilotRestClient = new BinarisEV3.EV3DifferentialPilotRestClient($http);
        $httpBackend.when('GET', '10.0.0.44:8080/run/10').respond(200, '');
        $httpBackend.when('GET', '10.0.0.44:8080/rotate/45').respond(200, '');
        $httpBackend.when('GET', '10.0.0.44:8080/beep').respond(200, '');
        $httpBackend.when('GET', '10.0.0.44:8080/buzz').respond(200, '');
    });
    it("should perform a REAL http-Request to the 'run'-endpoint and get a FAKE RESPONSE from $httpBackend mock", function (done) {
        ev3DifferentialPilotRestClient.run(10).then(function successCallback(response) {
            console.log('success! Robot runs!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response) {
            console.log('error... running failed.');
            done();
        });
    });
    it("should perform a REAL http-Request to the 'rotate'-endpoint and get a FAKE RESPONSE from $httpBackend mock", function (done) {
        ev3DifferentialPilotRestClient.rotate(45).then(function successCallback(response) {
            console.log('success! Robot rotates!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response) {
            console.log('error... rotating failed.');
            done();
        });
    });
    it("should perform a REAL http-Request to the 'beep'-endpoint and get a FAKE RESPONSE from $httpBackend mock", function (done) {
        ev3DifferentialPilotRestClient.beep().then(function successCallback(response) {
            console.log('success! Robot beeps!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response) {
            console.log('error... beeping failed.');
            done();
        });
    });
    it("should perform a REAL http-Request to the 'beep'-endpoint and get a FAKE RESPONSE from $httpBackend mock", function (done) {
        ev3DifferentialPilotRestClient.buzz().then(function successCallback(response) {
            console.log('success! Robot buzzes!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response) {
            console.log('error... buzzing failed.');
            done();
        });
    });
});
