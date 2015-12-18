
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
    var $http;

    beforeEach(function () {
        // get the REAL $http-Service, not the fake one from angular-mocks.js
        var $injector = angular.injector(['ng']);
        $http = $injector.get('$http');
    });

    it("should perform a REAL http-Request to wikipedia", function (done) {
        $http.get('http://www.wikipedia.de').then(function successCallback(response) {
            console.log('success!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response) {
            console.log('error...');
            done();
        });
    });

    it("should perform a REAL http-Request to google", function (done) {
        $http.get('http://www.google.de').then(function successCallback(response) {
            console.log('success!');
            expect(response.status).toBe(200);
            done();
        }, function errorCallback(response) {
            console.log('error...');
            done();
        });
    });
});