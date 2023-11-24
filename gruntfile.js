module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), // objeto de configuração
    })

    grunt.registerTask('olagrunt', function () {
        const done = this.async();
        setTimeout(function () {
            console.log('ola grunt!');
            done();
        }, 3000)
    })

    grunt.registerTask('default', ['olagrunt'])
}