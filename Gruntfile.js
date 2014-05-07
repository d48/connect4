module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            scripts: {
                files: ['./*.html','js/*.js','css/*.css','img/*.*'],
                tasks: [],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default',['watch']);
}
