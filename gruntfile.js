module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), // objeto de configuração
        less: {
            development: {
                files: {
                    'main.css': 'main.less'
                }
            },
            production: {
                options: {
                    compress: true
                },
                files: {
                    'main.min.css': 'main.less' //arquivo de destino: arquivo de origem
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'main2.css': 'main.scss'
                }
            }
        }
    })

    grunt.registerTask('olagrunt', function () {
        const done = this.async();
        setTimeout(function () {
            console.log('ola grunt!');
            done();
        }, 3000)
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['less', 'sass'])
}