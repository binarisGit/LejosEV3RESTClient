module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    'target/output.min.js': ['src/controller/*.js']
                }
            }
        }
    });

    grunt.registerTask('default', ['uglify']);
};