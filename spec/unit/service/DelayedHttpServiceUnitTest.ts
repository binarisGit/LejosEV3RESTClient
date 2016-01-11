import IDelayedHttpService = BinarisEV3.IDelayedHttpService;
describe("DelayedHttpService Unit test suite with asynchronous HTTP Requests: ", function () {

    // SUT
    var delayedHttpService: any;

    var $httpBackend: any;

    beforeEach(function () {
        var $injector = angular.injector(['ng', 'ngMockE2E', 'binarisEV3DifferentialPilot']);
        // get the $httpBackend-Service MOCK from Angular Module 'ngMockE2E'
        $httpBackend = $injector.get('$httpBackend');
        delayedHttpService = $injector.get('DelayedHttpService');

        // define mock rest endpoints so that no http-request gets sent over the network
        $httpBackend.when('GET', 'http://10.0.0.44:8080/differentpilot/run/10').respond(200, '');
        $httpBackend.when('GET', 'http://10.0.0.44:8080/differentpilot/rotate/45').respond(200, '');
    });

    it("should perform a REAL http-Request to the 'run'-endpoint and get a FAKE RESPONSE from $httpBackend mock", function (done) {
        var url = "http://10.0.0.44:8080/differentpilot/run/10";
        delayedHttpService.sendDelayedHttpRequest(url).then(function successCallback(response: any) {
            console.log('success! Robot runs!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response: any) {
            console.log('error... running failed.');
            done();
        });
    });

    it("should perform a REAL http-Request to the 'rotate'-endpoint and get a FAKE RESPONSE from $httpBackend mock", function (done) {
        var url = "http://10.0.0.44:8080/differentpilot/rotate/45";
        delayedHttpService.sendDelayedHttpRequest(url).then(function successCallback(response: any) {
            console.log('success! Robot runs!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response: any) {
            console.log('error... running failed.');
            done();
        });
    });


});