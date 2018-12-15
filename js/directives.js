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
        templateUrl: 'views/partials/css/main.html'
    }
}),

myApp.directive('csspageTemplate', function(){
    return {
        restrict: 'AE',
        templateUrl: 'views/partials/css/pages.html'
    }
}),

myApp.directive('cssmodulesTemplate', function(){
    return {
        restrict: 'AE',
        templateUrl: 'views/partials/css/modules.html'
    }
}),

myApp.directive('cssstyleTemplate', function(){
    return {
        restrict: 'AE',
        templateUrl: 'views/partials/css/style.html'
    }
}),

myApp.directive('cssbaseTemplate', function(){
    return {
        restrict: 'AE',
        templateUrl: 'views/partials/css/base.html'
    }
}),

