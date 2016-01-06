describe("Unit test suite with asynchronous HTTP Requests: ", function () {

    // SUT
    var ev3DifferentialPilotAdapterService: any;

    var $httpBackend: any;

    beforeEach(function () {
        var $injector = angular.injector(['ng', 'ngMockE2E', 'binarisEV3DifferentialPilot']);
        // get the $httpBackend-Service MOCK from Angular Module 'ngMockE2E'
        $httpBackend = $injector.get('$httpBackend');
        ev3DifferentialPilotAdapterService = $injector.get('EV3DifferentialPilotAdapterService');

        // define mock rest endpoints so that no http-request gets sent over the network
        $httpBackend.when('GET', '10.0.0.44:8080/run/10').respond(200, '');
        $httpBackend.when('GET', '10.0.0.44:8080/rotate/45').respond(200, '');
        $httpBackend.when('GET', '10.0.0.44:8080/beep').respond(200, '');
        $httpBackend.when('GET', '10.0.0.44:8080/buzz').respond(200, '');
    });

    it("should perform a REAL http-Request to the 'run'-endpoint and get a FAKE RESPONSE from $httpBackend mock", function (done) {
        ev3DifferentialPilotAdapterService.run(10).then(function successCallback(response: any) {
            console.log('success! Robot runs!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response: any) {
            console.log('error... running failed.');
            done();
        });
    });

    it("should perform a REAL http-Request to the 'rotate'-endpoint and get a FAKE RESPONSE from $httpBackend mock", function (done) {
        ev3DifferentialPilotAdapterService.rotate(45).then(function successCallback(response: any) {
            console.log('success! Robot rotates!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response: any) {
            console.log('error... rotating failed.');
            done();
        });
    });

    it("should perform a REAL http-Request to the 'beep'-endpoint and get a FAKE RESPONSE from $httpBackend mock", function (done) {
        ev3DifferentialPilotAdapterService.beep().then(function successCallback(response: any) {
            console.log('success! Robot beeps!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response: any) {
            console.log('error... beeping failed.');
            done();
        });
    });

    it("should perform a REAL http-Request to the 'beep'-endpoint and get a FAKE RESPONSE from $httpBackend mock", function (done) {
        ev3DifferentialPilotAdapterService.buzz().then(function successCallback(response: any) {
            console.log('success! Robot buzzes!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response: any) {
            console.log('error... buzzing failed.');
            done();
        });
    });

});