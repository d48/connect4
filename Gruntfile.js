module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            sass: {
                files: ['css/sass/*.{scss,sass}'],
                tasks: ['sass:dist']
            },
            scripts: {
                files: ['./*.html','js/*.js','css/*.css','img/*.*'],
                tasks: [],
                options: {
                    livereload: true
                }
            }
        },
        
        sass: {
            dist: {
                files: {
                    'css/styles.css': 'css/sass/styles.scss'
                },
                options: {
                    sourcemap: 'true'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default',['watch']);
}
