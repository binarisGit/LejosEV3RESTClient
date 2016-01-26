/*
 WICHTIG:
 Aufgrund der "Same Origin Policy" sind HTTP-Requests auf fremde URLs nur dann erfolgreich,
 wenn im verwendeten Test-Browser ein "Cross-Origin Resource Sharing"-Plugin installiert ist
 ODER die angeforderte Domain AJAX Zugriffe erlaubt.

 !!! Sollte dies nicht der Fall sein, werden die Integrationstests immer fehlschlagen, da niemals 'done()'-aufgerufen wird !!!
 Siehe: Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.

 Chrome Plugin: "Allow-Control-Allow-Origin" (im Chrome Web Store)

 Links:
 https://de.wikipedia.org/wiki/Same-Origin-Policy
 https://de.wikipedia.org/wiki/Cross-Origin_Resource_Sharing

 */

describe("Integration test suite with asynchronous HTTP Requests: ", () => {

    // SUT
    var ev3DifferentialPilotAdapterService: any;

    beforeEach(() => {
        // get the REAL $http-Service, not the fake one from angular-mocks.js
        var $injector = angular.injector(['ng', 'binarisEV3DifferentialPilot']);
        ev3DifferentialPilotAdapterService = $injector.get("EV3DifferentialPilotAdapterService");
    });

    it("should perform a REAL http-Request to the 'run'-endpoint", (done) => {
        ev3DifferentialPilotAdapterService.run(10).then(function successCallback(response: any) {
            expect(response.status).toBe(204);
            done();
        });
    });

    it("should perform a REAL http-Request to the 'rotation'-endpoint", (done) => {
        ev3DifferentialPilotAdapterService.rotate(45).then(function successCallback(response: any) {
            expect(response.status).toBe(204);
            done();
        });
    });

    it("should perform a REAL http-Request to the 'stop'-endpoint", (done) => {
        ev3DifferentialPilotAdapterService.stop().then(function successCallback(response: any) {
            expect(response.status).toBe(204);
            done();
        });
    });

    it("should perform a REAL http-Request to the 'quickStop'-endpoint", (done) => {
        ev3DifferentialPilotAdapterService.stop().then(function successCallback(response: any) {
            expect(response.status).toBe(204);
            done();
        });
    });

    it("should perform a REAL http-Request to the 'getMovementIncrement'-endpoint", (done) => {
        ev3DifferentialPilotAdapterService.run(10).then(function successCallback(response: any) {
            return ev3DifferentialPilotAdapterService.getMovementIncrement();
        }).then(function successCallback(response: any) {
            expect(response.data).toBeCloseTo(5, 1.0);
            expect(response.status).toBe(200);
            done();
        });
    });

});

