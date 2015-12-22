import IDeferred = angular.IDeferred;
describe("Unit test suite with asynchronous HTTP Requests: ", function () {

    // SUT
    var ev3DifferentialPilotRestClient: BinarisEV3.IDifferentialPilotRestClient;

    var $http: any;
    var $httpBackend: any;

    beforeEach(function () {
        // get the $httpBackend-Service MOCK from Angular Module 'ngMockE2E'
        // get the REAL $http-Service from Angular Module 'ng'
        var $injector = angular.injector(['ng', 'ngMockE2E']);
        $httpBackend = $injector.get('$httpBackend');
        $http = $injector.get('$http');

        ev3DifferentialPilotRestClient = new BinarisEV3.EV3DifferentialPilotRestClient($http);

        // define mock rest endpoints so that no http-request gets sent over the network
        $httpBackend.when('GET', '10.0.0.44:8080/run/10').respond(200, '');
        $httpBackend.when('GET', '10.0.0.44:8080/rotate/45').respond(200, '');
        $httpBackend.when('GET', '10.0.0.44:8080/beep').respond(200, '');
        $httpBackend.when('GET', '10.0.0.44:8080/buzz').respond(200, '');
    });

    it("should perform a REAL http-Request to the 'run'-endpoint and get a FAKE RESPONSE from $httpBackend mock", function (done) {
        ev3DifferentialPilotRestClient.run(10).then(function successCallback(response: any) {
            console.log('success! Robot runs!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response: any) {
            console.log('error... running failed.');
            done();
        });
    });

    it("should perform a REAL http-Request to the 'rotate'-endpoint and get a FAKE RESPONSE from $httpBackend mock", function (done) {
        ev3DifferentialPilotRestClient.rotate(45).then(function successCallback(response: any) {
            console.log('success! Robot rotates!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response: any) {
            console.log('error... rotating failed.');
            done();
        });
    });

    it("should perform a REAL http-Request to the 'beep'-endpoint and get a FAKE RESPONSE from $httpBackend mock", function (done) {
        ev3DifferentialPilotRestClient.beep().then(function successCallback(response: any) {
            console.log('success! Robot beeps!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response: any) {
            console.log('error... beeping failed.');
            done();
        });
    });

    it("should perform a REAL http-Request to the 'beep'-endpoint and get a FAKE RESPONSE from $httpBackend mock", function (done) {
        ev3DifferentialPilotRestClient.buzz().then(function successCallback(response: any) {
            console.log('success! Robot buzzes!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response: any) {
            console.log('error... buzzing failed.');
            done();
        });
    });

});