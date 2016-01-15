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

describe("Color Adapter Integration test suite with asynchronous HTTP Requests: ", function () {

    // SUT
    var ev3ColorAdapterService: BinarisEV3.IColorAdapterService;
    var delayedHttpService: IDelayedHttpService;

    beforeEach(function () {
        // get the REAL $http-Service, not the fake one from angular-mocks.js
        var $injector = angular.injector(['ng', 'binarisEV3DifferentialPilot']);
        this.delayedHttpService = $injector.get('DelayedHttpService');
        ev3ColorAdapterService = new BinarisEV3.EV3ColorAdapterService(this.delayedHttpService);
    });

    it("should perform a REAL http-Request to the 'getcolor'-endpoint", function (done) {
        var promise = ev3ColorAdapterService.getColor();
        promise.then(function successCallback(response: any) {
            expect(response.status).toBe(200);
            done();
        });
    });

});

