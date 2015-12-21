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
        $httpBackend.when('GET', '10.0.0.44:8080/run/10').respond('123');
    });

    it("should perform a REAL http-Request to the 'run'-endpoint and get a fake response from $httpBackend mock", function (done) {
        ev3DifferentialPilotRestClient.run(10).then(function successCallback(response: any) {
            console.log('success! Robot runs!');
            expect(response.data).toBe("123");
            done();
        }, function errorCallback(response: any) {
            console.log('error... running failed.');
            done();
        });
    });

});