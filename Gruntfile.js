module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    require('time-grunt')(grunt);

    grunt.initConfig({
        //shell命令
        shell: {
            testApi: {
                command: function(fileName){
                    return './node_modules/mocha/bin/_mocha --recursive test/api/'+ fileName +'.js --bail'
                }
            },
            testApiRouter: {
                command: function(name){
                    return './node_modules/mocha/bin/_mocha --recursive test/api/router/'+ name +'.js --bail'
                }
            }
        }
    });
};

