module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'handl/bower_components/angular/angular.js',
      'handl/bower_components/angular-mocks/angular-mocks.js',
      'handl/bower_components/angular-route/angular-route.js',
      'handl/bower_components/angular-resource/angular-resource.js',
      'handl/js/handl.js',
      'handl/js/**/*.js',
      'test/unit/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-jasmine'
    ]
  });
};
