module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'http://maps.googleapis.com/maps/api/js?sensor=false',
      'test/mocks/*.js',
      'handl/bower_components/lodash/dist/lodash.js',
      'handl/bower_components/angular/angular.js',
      'handl/bower_components/angular-mocks/angular-mocks.js',
      'handl/bower_components/angular-simple-logger/dist/angular-simple-logger.min.js',
      'handl/bower_components/angular-route/angular-route.js',
      'handl/bower_components/ngGeolocation/ngGeolocation.js',
      'handl/bower_components/angular-resource/angular-resource.js',
      'handl/bower_components/angular-google-maps/dist/angular-google-maps.js',
      'handl/js/handl.js',
      'handl/js/**/*.js',
      'test/unit/*.js',
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
