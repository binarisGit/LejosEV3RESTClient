describe("Unit test suite with asynchronous HTTP Requests: ", function () {
    var ev3DifferentialPilotRestClient;
    var $http;
    var $httpBackend;
    beforeEach(function () {
        var $injector = angular.injector(['ng', 'ngMockE2E']);
        $httpBackend = $injector.get('$httpBackend');
        $http = $injector.get('$http');
        ev3DifferentialPilotRestClient = new BinarisEV3.EV3DifferentialPilotRestClient($http);
        $httpBackend.when('GET', '10.0.0.44:8080/run/10').respond('123');
    });
    it("should perform a REAL http-Request to the 'run'-endpoint and get a fake response from $httpBackend mock", function (done) {
        ev3DifferentialPilotRestClient.run(10).then(function successCallback(response) {
            console.log('success! Robot runs!');
            expect(response.data).toBe("123");
            done();
        }, function errorCallback(response) {
            console.log('error... running failed.');
            done();
        });
    });
});
