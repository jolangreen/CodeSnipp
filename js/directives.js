'use strict'

myApp.directive('htmlTemplate', function(){
    return {
        restrict: 'AE',
        templateUrl: 'views/partials/html/main.html'
    }
}),

myApp.directive('cssTemplate', function(){
    return {
        restrict: 'AE',
        templateUrl: 'views/partials/css/layout.html'
    }
}),

myApp.directive('csspageTemplate', function(){
    return {
        restrict: 'AE',
        templateUrl: 'views/partials/css/home.html'
    }
}),

myApp.directive('cssmodulesTemplate', function(){
    return {
        restrict: 'AE',
        templateUrl: 'views/partials/css/modules.html'
    }
}),

myApp.directive('cssvariablesTemplate', function(){
    return {
        restrict: 'AE',
        templateUrl: 'views/partials/css/variables.html'
    }
}),

myApp.directive('cssbaseTemplate', function(){
    return {
        restrict: 'AE',
        templateUrl: 'views/partials/css/base.html'
    }
}),

