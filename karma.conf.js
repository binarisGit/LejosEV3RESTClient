// Karma configuration
// Generated on Fri Dec 18 2015 18:03:56 GMT+0100 (Mitteleuropäische Zeit)
/*

 Falls Karma-Run folgende Fehlermeldung wirft muss anstatt localhost '127.0.0.1' angegeben werden:

 FEHLERMELDUNG:
 C:\WebStorm 11.0.1\plugins\js-karma\js_reporter\karma-intellij\lib\intellijRunner.js:54
 throw e;
 ^

 Error: getaddrinfo ENOENT localhost:9876
 at Object.exports._errnoException (util.js:856:11)
 at errnoException (dns.js:31:15)
 at GetAddrInfoReqWrap.onlookup [as oncomplete] (dns.js:77:26)


 FIX:
 intellijRunner.js mit hostname '127.0.0.1' anstatt localhost:

 function runWithConfig(config) {
 var options = {
 hostname: '127.0.0.1',
 path: config.urlRoot + 'run',
 port: config.port,
 method: 'POST',
 headers: {
 'Content-Type': 'application/json'
 }
 };

 */

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            // since we are performing INTEGRATIONS tests angular-mocks.js is not needed!
            "bower_components/angular/angular.js",
            "bower_components/angular-mocks/angular-mocks.js",
            "app.conf.js",
            "src/angular_services/EV3DifferentialPilotAdapterService.js",
            "src/angular_services/EV3SoundAdapterService.js",
            "src/angular_services/EV3ColorAdapterService.js",
            "src/angular_controllers/EV3RemoteController.js",
            "src/App.js",
            "spec/unit/controller/EV3RemoteControllerUnitTest.js",
            /* will only succeed if EV3 REST-Service allows CORS */
            "spec/integration/controller/EV3RemoteControllerIntegrationTest.js",
            "spec/integration/service/EV3DifferentialPilotAdapterServiceIntegrationTest.js",
            "spec/integration/service/EV3SoundAdapterServiceIntegrationTest.js",
            "spec/integration/service/EV3ColorAdapterServiceIntegrationTest.js",
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ["Chrome"],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultanous
        concurrency: Infinity
    })
}
