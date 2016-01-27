/**
 * Created by kay.odenthal on 27.01.2016.
 */

module.exports = function (grunt) {
    var angular_application_files = [
        'src/app.conf.js',
        'src/angular_services/**/*.js',
        'src/angular_controllers/**/*.js',
        'src/App.js'
    ];

    // Project configuration.
    grunt.initConfig({
        concat: {
            angular_application: {
                src: angular_application_files,
                dest: 'target/angular_application.js',
            },
            angular_integration_tests: {
                src: 'spec/integration/**/*.js',
                dest: 'target/angular_integration_tests.js',
            },
            angular_unit_tests: {
                src: 'spec/unit/**/*.js',
                dest: 'target/angular_unit_tests.js',
            }
        },
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('default', ['concat']);
};