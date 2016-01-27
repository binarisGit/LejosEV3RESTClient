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
        watch: {
            files: ['src/**/*.ts', 'spec/**/*.ts'],
            tasks: ['ts','concat'],
        },
        ts: {
            default: {
                // specifying tsconfig as a string will use the specified `tsconfig.json` file.
                tsconfig: './tsconfig.json'
            }
        },
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

    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['ts']);

    //grunt.registerTask("default", ["ts"]);

};