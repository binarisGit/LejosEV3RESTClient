/**
 * Created by kay.odenthal on 27.01.2016.
 */

module.exports = function (grunt) {

    grunt.initConfig({

        exec: {
            install_global_npm_modules: {
                cmd: "npm install -g tsd && " +
                "npm install -g karma-cli"
            },
            install_typescript_definition_files: {
                cmd: "tsd install"
            }
        },
        clean: ["target", "compiled_js"],
        watch: {
            files: ["src/**/*.ts", "spec/**/*.ts"],
            tasks: ["build"],
        },
        browserify: {
            application: {
                src: "compiled_js/src/App.js",
                dest: "target/application.js"
            },
            unit: {
                src: "compiled_js/spec/unit/**/*.js",
                dest: "target/unit_tests.js"
            },
            integration: {
                src: "compiled_js/spec/integration/**/*.js",
                dest: "target/integration_tests.js"
            }
        },
        ts: {
            options: {
                failOnTypeErrors: false
            },
            default: {
                tsconfig: "./tsconfig.json"
            }
        },
    });

    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-exec");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-clean");

    // Custom tasks
    grunt.registerTask("build", ["clean", "ts", "browserify"]);
    grunt.registerTask("install", ["exec", "build"]);
    grunt.registerTask("default", ["build", "watch"]);

};