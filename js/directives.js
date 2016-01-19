'use strict'

myApp.directive('htmlTemplate', function(){
    return {
//      There are 3 types of directives, but we only use two types, they are:
//      Element type: that means your directive will be a new HTML tag, for example <user-card></user-card>
//      Attribute type: thats means your directive will be a attribute like <div user-card></div>
//      So restrict: 'AE' means that your directive will be both, you can use just 'A' or just 'E'
        restrict: 'AE',
        templateUrl: 'views/partials/html/main.html'
    }
}),

myApp.directive('cssTemplate', function(){
    return {
//      There are 3 types of directives, but we only use two types, they are:
//      Element type: that means your directive will be a new HTML tag, for example <user-card></user-card>
//      Attribute type: thats means your directive will be a attribute like <div user-card></div>
//      So restrict: 'AE' means that your directive will be both, you can use just 'A' or just 'E'
        restrict: 'AE',
        templateUrl: 'views/partials/css/main.html'
    }
}),

myApp.directive('csspageTemplate', function(){
    return {
//      There are 3 types of directives, but we only use two types, they are:
//      Element type: that means your directive will be a new HTML tag, for example <user-card></user-card>
//      Attribute type: thats means your directive will be a attribute like <div user-card></div>
//      So restrict: 'AE' means that your directive will be both, you can use just 'A' or just 'E'
        restrict: 'AE',
        templateUrl: 'views/partials/css/page-all.html'
    }
}),

myApp.directive('cssmodulesTemplate', function(){
    return {
//      There are 3 types of directives, but we only use two types, they are:
//      Element type: that means your directive will be a new HTML tag, for example <user-card></user-card>
//      Attribute type: thats means your directive will be a attribute like <div user-card></div>
//      So restrict: 'AE' means that your directive will be both, you can use just 'A' or just 'E'
        restrict: 'AE',
        templateUrl: 'views/partials/css/modules.html'
    }
}),

