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

describe("EV3SoundAdapterService Integration test suite with asynchronous HTTP Requests: ", () => {

    // SUT
    var ev3SoundAdapterService:any;

    beforeEach(() => {
        // get the REAL $http-Service, not the fake one from angular-mocks.js
        var $injector = angular.injector(['ng', 'binarisEV3DifferentialPilot']);
        ev3SoundAdapterService = $injector.get("EV3SoundAdapterService");
    });

    it("should perform a REAL http-Request to the 'buzz'-endpoint", (done) => {
        ev3SoundAdapterService.buzz().then((response:any) => {
            expect(response.status).toBe(204);
            done();
        });
    });

    it("should perform a REAL http-Request to the 'beep'-endpoint", (done) => {
        ev3SoundAdapterService.beep().then((response:any) => {
            expect(response.status).toBe(204);
            done();
        });
    });
});

