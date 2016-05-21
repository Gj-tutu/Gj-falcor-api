module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    require('time-grunt')(grunt);

    grunt.initConfig({
        //shell命令
        shell: {
            testAll: {
                command: function(){
                    return 'npm run-script test';
                }
            },
            testCov: {
                command: function(){
                    return 'npm run-script test-cov';
                }
            },
            testApi: {
                command: function(fileName){
                    return './node_modules/mocha/bin/_mocha --recursive test/api/'+ fileName +'.js --bail'
                }
            },
            testApiRouter: {
                command: function(){
                    return './node_modules/mocha/bin/_mocha --recursive test/api/router/ --bail'
                }
            }
        }
    });
};

