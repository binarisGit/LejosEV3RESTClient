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

    // SUT
    var ev3DifferentialPilotRestClient: BinarisEV3.IDifferentialPilotRestClient;
    var $http: any;

    beforeEach(function () {
        // get the REAL $http-Service, not the fake one from angular-mocks.js
        var $injector = angular.injector(['ng']);
        $http = $injector.get('$http');
        ev3DifferentialPilotRestClient = new BinarisEV3.EV3DifferentialPilotRestClient($http);
    });

    it("should perform a REAL http-Request to the 'run'-endpoint", function () {
        var promise = ev3DifferentialPilotRestClient.run(10);
        console.log(promise);
        promise.then(function successCallback(response: any) {
            console.log('success! Robot runs!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response: any) {
            console.log('error... running failed.');
            done();
        });
    });

    it("should perform a REAL http-Request to the 'rotation'-endpoint", function (done) {
        ev3DifferentialPilotRestClient.rotate(45).then(function successCallback(response: any) {
            console.log('success! Robot rotates!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response: any) {
            console.log('error... rotating failed.');
            done();
        });
    });

    it("should perform a REAL http-Request to the 'rotation'-endpoint", function (done) {
        ev3DifferentialPilotRestClient.buzz().then(function successCallback(response: any) {
            console.log('success! Robot buzzes!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response: any) {
            console.log('error... buzzing failed.');
            done();
        });
    });

    it("should perform a REAL http-Request to the 'rotation'-endpoint", function (done) {
        ev3DifferentialPilotRestClient.beep().then(function successCallback(response: any) {
            console.log('success! Robot beeps!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response: any) {
            console.log('error... beeping failed.');
            done();
        });
    });
});