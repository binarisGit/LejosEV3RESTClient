/**
 * Created by kay.odenthal on 27.01.2016.
 */

module.exports = function (grunt) {
    var angular_application_files = [
        'compiled_js/src/app.conf.js',
        'compiled_js/src/angular_services/**/*.js',
        'compiled_js/src/angular_controllers/**/*.js',
        'compiled_js/src/App.js'
    ];

    // Project configuration.
    grunt.initConfig({

        exec: {
            install_global_npm_modules: {
                cmd: 'npm install -g bower && ' +
                'npm install -g tsd && ' +
                'npm install -g karma-jasmine && ' +
                'npm install -g jasmine-core && ' +
                'npm install -g karma'
            },
            install_bower_and_tsd_dependencies: {
                cmd: 'bower install && tsd install'
            }
        },
        clean: ["target"],
        watch: {
            files: ['src/**/*.ts', 'spec/**/*.ts'],
            tasks: ['build'],
        },
        browserify: {
            main: {
                src: 'compiled_js/src/App.js',
                dest: 'target/application_with_requires.js'
            }
        },
        ts: {
            options: {
                failOnTypeErrors: false
            },
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
                src: 'compiled_js/spec/integration/**/*.js',
                dest: 'target/angular_integration_tests.js',
            },
            angular_unit_tests: {
                src: 'compiled_js/spec/unit/**/*.js',
                dest: 'target/angular_unit_tests.js',
            }
        },
    });

    // prevent ts from terminating on warnings
    grunt.loadNpmTasks('grunt-force-task');

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Custom tasks
    grunt.registerTask('build', ['clean', 'ts', 'concat']);
    grunt.registerTask('install', ['exec', 'build']);
    grunt.registerTask('default', ['build', 'watch']);

};