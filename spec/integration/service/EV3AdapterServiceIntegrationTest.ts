/*
 WICHTIG:
 Aufgrund der "Same Origin Policy" sind HTTP-Requests auf fremde URLs nur dann erfolgreich,
 wenn im verwendeten Test-Browser ein "Cross-Origin Resource Sharing"-Plugin installiert ist
 ODER die angeforderte Domain AJAX Zugriffe erlaubt.

 !!! Sollte dies nicht der Fall sein, werden die Integrationstests immer fehlschlagen !!!

 Chrome Plugin: "Allow-Control-Allow-Origin" (im Chrome Web Store)

 Links:
 https://de.wikipedia.org/wiki/Same-Origin-Policy
 https://de.wikipedia.org/wiki/Cross-Origin_Resource_Sharing

 */

describe("Integration test suite with asynchronous HTTP Requests: ", function () {

    // SUT
    var ev3DifferentialPilotAdapterService: BinarisEV3.IDifferentialPilotAdapterService;
    var $http: any;

    beforeEach(function () {
        // get the REAL $http-Service, not the fake one from angular-mocks.js
        var $injector = angular.injector(['ng']);
        $http = $injector.get('$http');
        ev3DifferentialPilotAdapterService = new BinarisEV3.EV3DifferentialPilotAdapterService($http);
    });

    it("should perform a REAL http-Request to the 'run'-endpoint", function (done) {
        var promise = ev3DifferentialPilotAdapterService.run(10);
        promise.then(function successCallback(response: any) {
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response: any) {
            expect(response.data).not.toBe(null);
            done();
        });
    });

    it("should perform a REAL http-Request to the 'rotation'-endpoint", function (done) {
        ev3DifferentialPilotAdapterService.rotate(45).then(function successCallback(response: any) {
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response: any) {
            expect(response.data).not.toBe(null);
            done();
        });
    });

    it("should perform a REAL http-Request to the 'buzz'-endpoint", function (done) {
        ev3DifferentialPilotAdapterService.buzz().then(function successCallback(response: any) {
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response: any) {
            expect(response.data).not.toBe(null);
            done();
        });
    });

    it("should perform a REAL http-Request to the 'beep'-endpoint", function (done) {
        ev3DifferentialPilotAdapterService.beep().then(function successCallback(response: any) {
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response: any) {
            expect(response.data).not.toBe(null);
            done();
        });
    });

});

