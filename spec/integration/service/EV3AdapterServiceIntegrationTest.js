/*
 WICHTIG:
 Aufgrund der "Same Origin Policy" sind HTTP-Requests auf fremde URLs nur dann erfolgreich,
 wenn im verwendeten Test-Browser ein "Cross-Origin Resource Sharing"-Plugin installiert ist.

 Chrome Plugin: "Allow-Control-Allow-Origin" (im Chrome Web Store)

 Links:
 https://de.wikipedia.org/wiki/Same-Origin-Policy
 https://de.wikipedia.org/wiki/Cross-Origin_Resource_Sharing

 */
describe("Integration test suite with asynchronous HTTP Requests: ", function () {
    var ev3DifferentialPilotAdapterService;
    var $http;
    beforeEach(function () {
        var $injector = angular.injector(['ng']);
        $http = $injector.get('$http');
        ev3DifferentialPilotAdapterService = new BinarisEV3.EV3DifferentialPilotRestClient($http);
    });
    it("should perform a REAL http-Request to the 'run'-endpoint", function (done) {
        ev3DifferentialPilotAdapterService.run(10).then(function successCallback(response) {
            console.log('success! Robot runs!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response) {
            console.log('error... running failed.');
            done();
        });
    });
    it("should perform a REAL http-Request to the 'rotation'-endpoint", function (done) {
        ev3DifferentialPilotAdapterService.rotate(45).then(function successCallback(response) {
            console.log('success! Robot rotates!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response) {
            console.log('error... rotating failed.');
            done();
        });
    });
    it("should perform a REAL http-Request to the 'rotation'-endpoint", function (done) {
        ev3DifferentialPilotAdapterService.buzz().then(function successCallback(response) {
            console.log('success! Robot buzzes!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response) {
            console.log('error... buzzing failed.');
            done();
        });
    });
    it("should perform a REAL http-Request to the 'rotation'-endpoint", function (done) {
        ev3DifferentialPilotAdapterService.beep().then(function successCallback(response) {
            console.log('success! Robot beeps!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response) {
            console.log('error... beeping failed.');
            done();
        });
    });
});
