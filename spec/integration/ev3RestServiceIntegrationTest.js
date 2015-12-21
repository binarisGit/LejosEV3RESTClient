/*
 WICHTIG:
 Aufgrund der "Same Origin Policy" sind HTTP-Requests auf fremde URLs nur dann erfolgreich,
 wenn im verwendeten Test-Browser ein "Cross-Origin Resource Sharing"-Plugin installiert ist.

 Chrome Plugin: "Allow-Control-Allow-Origin" (im Chrome Web Store)

 Links:
 https://de.wikipedia.org/wiki/Same-Origin-Policy
 https://de.wikipedia.org/wiki/Cross-Origin_Resource_Sharing

 */
var EV3RestService = BinarisEV3.EV3RestService;
describe("Integration test suite with asynchronous HTTP Requests: ", function () {
    var ev3RestService;
    var $http;
    beforeEach(function () {
        var $injector = angular.injector(['ng']);
        $http = $injector.get('$http');
        ev3RestService = new EV3RestService($http);
    });
    it("should perform a REAL http-Request to the 'run'-endpoint", function (done) {
        ev3RestService.run(10).then(function successCallback(response) {
            console.log('success! Robot runs!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response) {
            console.log('error... running failed.');
            done();
        });
    });
    it("should perform a REAL http-Request to the 'rotation'-endpoint", function (done) {
        ev3RestService.rotate(45).then(function successCallback(response) {
            console.log('success! Robot rotates!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response) {
            console.log('error... rotating failed.');
            done();
        });
    });
    it("should perform a REAL http-Request to the 'rotation'-endpoint", function (done) {
        ev3RestService.buzz().then(function successCallback(response) {
            console.log('success! Robot buzzes!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response) {
            console.log('error... buzzing failed.');
            done();
        });
    });
    it("should perform a REAL http-Request to the 'rotation'-endpoint", function (done) {
        ev3RestService.beep().then(function successCallback(response) {
            console.log('success! Robot beeps!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response) {
            console.log('error... beeping failed.');
            done();
        });
    });
});
//# sourceMappingURL=ev3RestServiceIntegrationTest.js.map