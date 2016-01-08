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
describe("Integration test suite with asynchronous HTTP Requests: ", function () {
    var ev3DifferentialPilotAdapterService;
    var $http;
    beforeEach(function () {
        var $injector = angular.injector(['ng']);
        $http = $injector.get('$http');
        ev3DifferentialPilotAdapterService = new BinarisEV3.EV3DifferentialPilotAdapterService($http);
    });
    it("should perform a REAL http-Request to the 'run'-endpoint", function (done) {
        var promise = ev3DifferentialPilotAdapterService.run(10);
        promise.then(function successCallback(response) {
            expect(response.status).toBe(200);
            done();
        });
    });
    it("should perform a REAL http-Request to the 'rotation'-endpoint", function (done) {
        ev3DifferentialPilotAdapterService.rotate(45).then(function successCallback(response) {
            expect(response.status).toBe(200);
            done();
        });
    });
});
