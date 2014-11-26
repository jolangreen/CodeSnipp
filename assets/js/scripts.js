/**
 * New browsers support a new mode to use JavaScript called strict mode,
 * if you declare that in your code the compiler will be more strict in order
 * to avoid errors and mistakes. Usually JavaScript accepts few mistakes
 * without breaking the code nor alerting you, using strict mode this will not happen
 */
'use strict';


/**
 * First step is to create a Angular module to hold our application, note
 * that the ngRoute module was include after our application name inside an array
 * we call that dependency injection. In order to manage route in our application
 * Angular Team have created a separate module for that called ngRoute, and if we want
 * to define routes in our application we need to include that dependency.
 */
var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);


/**
 * Now the variable called 'myApp' contains our module (our application)
 * Using the config method we will setup routes for our project.
 * $routeProvider is a service from ngRoute module that is responsible
 * for managing the routes in your project
 */
myApp.config(['$routeProvider', function($routeProvider){

    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller : 'HTMLController'
    })
    .when('/phpcode', {
        templateUrl: 'views/phpcode.html',
        controller : 'PhpController'
    })
    .when('/services', {
        templateUrl: 'views/services.html',
        controller : 'UsersController'
    })
    .when('/contact', {
        templateUrl: 'views/contact.html',
        controller : 'UsersController'
    })
    .otherwise({
        redirectTo: '/'
    })

}])

'use strict';

/////////////////////
// Base Controller //
/////////////////////
/**
 * Its a good practice to have an Base Controller in your application.
 * Usually controllers are responsible for one view only, and Base Controller
 * is you global controller for things like Authentication, Menus, etc.
 */
                                  // Here we are injecting $scope
                                  // as our dependency. Must be declared
                                  // in these two spots.
//                                   |                              |
//                                   V                              V
myApp.controller('BaseController', ['$scope', '$location', function($scope, $location){
    // Set active class on the current menu item
    $scope.menuClass = function(page) {
        var current = $location.path().substring(1);
        return page === current ? 'active' : '';
    };

    // Set class on home page
    $scope.pageClass = function(pager) {
        var current = $location.path().substring(1);
        return pager === current ? 'home' : '';
    };

}]);

/////////////////////
// Home Controller //
/////////////////////
myApp.controller('HomeController', ['$scope', '$timeout', '$modal', '$log', function($scope, $timeout, $modal, $log){


}]);



myApp.controller('HTMLController', function ($scope, $modal, $log) {

    $scope.headeritems = [
        {
            title: 'Logo Left - Nav Right',
            img: 'assets/images/header/header1.jpg',
            html: 'views/partials/html/header/header1.html',
            css: 'views/partials/css/header/header1.html'
        },
        {
            title: 'Logo & Social - Nav Full',
            img: 'assets/images/header/header2.jpg',
            html: 'views/partials/html/header/header2.html',
            css: 'views/partials/css/header/header2.html'
        },
        {
            title: 'Logo Top - Nav & Social',
            img: 'assets/images/header/header3.jpg',
            html: 'views/partials/html/header/header3.html',
            css: 'views/partials/css/header/header3.html'
        },
        {
            title: 'Logo Top - Nav Full',
            img: 'assets/images/header/header4.jpg',
            html: 'views/partials/html/header/header4.html',
            css: 'views/partials/css/header/header4.html'
        },
        {
            title: 'Fifth Item',
            img: 'assets/images/sample-img.jpg',
            html: 'views/partials/html/header/header5.html',
            css: 'views/partials/css/header/header5.html'
        },
    ];

    $scope.footeritems = [
        {
            title: 'Nav Left - Social Right',
            img: 'assets/images/footer/footer1.jpg',
            html: 'views/partials/html/footer/footer1.html',
            css: 'views/partials/css/footer/footer1.html'
        },
        {
            title: 'Centered Footer',
            img: 'assets/images/footer/footer2.jpg',
            html: 'views/partials/html/footer/footer2.html',
            css: 'views/partials/css/footer/footer2.html'
        },
        {
            title: '3 column list',
            img: 'assets/images/footer/footer3.jpg',
            html: 'views/partials/html/footer/footer3.html',
            css: 'views/partials/css/footer/footer3.html'
        },

        {
            title: '4 column sections',
            img: 'assets/images/footer/footer4.jpg',
            html: 'views/partials/html/footer/footer4.html',
            css: 'views/partials/css/footer/footer4.html'
        },
    ];

    $scope.banneritems = [
        {
            title: 'Text Center',
            img: 'assets/images/banner/banner1.jpg',
            html: 'views/partials/html/banner/banner1.html',
            css: 'views/partials/css/banner/banner1.html'
        },
        {
            title: 'Text Left - Img Right',
            img: 'assets/images/banner/banner2.jpg',
            html: 'views/partials/html/banner/banner2.html',
            css: 'views/partials/css/banner/banner2.html'
        },
    ];

    $scope.ctaitems = [
        {
            title: 'Icon & Content',
            img: 'assets/images/cta/cta1.jpg',
            html: 'views/partials/html/cta/cta1.html',
            css: 'views/partials/css/cta/cta1.html'
        },
        {
            title: 'Image With Text Overlay',
            img: 'assets/images/cta/cta2.jpg',
            html: 'views/partials/html/cta/cta2.html',
            css: 'views/partials/css/cta/cta2.html'
        },
        {
            title: 'Image, Title & Text',
            img: 'assets/images/cta/cta3.jpg',
            html: 'views/partials/html/cta/cta3.html',
            css: 'views/partials/css/cta/cta3.html'
        },
    ];

    $scope.bodyitems = [
        {
            title: 'Content Left - Sidebar Right',
            img: 'assets/images/body/sidebar1.jpg',
            html: 'views/partials/html/body/sidebar1.html',
            css: 'views/partials/css/body/sidebar1.html'
        },
        {
            title: 'Content Right - Sidebar Left',
            img: 'assets/images/body/sidebar2.jpg',
            html: 'views/partials/html/body/sidebar2.html',
            css: 'views/partials/css/body/sidebar2.html'
        },
        {
            title: 'Media - Icons & Content List',
            img: 'assets/images/body/media-list.jpg',
            html: 'views/partials/html/body/services.html',
            css: 'views/partials/css/body/services.html'
        },
        {
            title: 'Form Left - Content Right',
            img: 'assets/images/body/contact.jpg',
            html: 'views/partials/html/body/contact.html',
            css: 'views/partials/css/body/contact.html'
        },

        {
            title: 'Center Image Section',
            img: 'assets/images/sample-img.jpg',
            html: 'views/partials/html/body/center-img.html',
            css: 'views/partials/css/body/center-img.html'
        },
    ];

//Select Items
$scope.selected = {};

$scope.selected.bodyitems = [

];

/**/
/*$scope.select = function(item, type) {
    $scope.selected[type]=item;
    console.log($scope.selected);
};
*/
$scope.select = function(item, type) {
    if(type = 'body') {
      $scope.selected.bodyitems.push(item);
    } else {
      $scope.selected[type]=item;
    };
    console.log($scope.selected);
};/**/

});

/*
myApp.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
*/

myApp.controller('TabsDemoCtrl', function ($scope, $window) {
  $scope.tabs = [
    { title:'Dynamic Title 1', content:'Dynamic content 1' },
    { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
  ];

});

myApp.controller('PhpController', ['$scope', '$timeout', function($scope, $timeout){
    $scope.oneAtATime = true;

    $scope.phpcodes = [
        {
            title: "Absolute URL link",
            code: "views/partials/php/absolute-link.html"
        },
        {
            title: "Template folder link",
            code: "<?php echo home_url( '/' ); ?>"
        },
        {
            title: "Post thumbnail",
            code: "<?php the_post_thumbnail('large-thumb'); ?>"
        },
        {
            title: "Display category",
            code: "<?php echo home_url( '/' ); ?>"
        },
        {
            title: "Display tags",
            code: "<?php echo home_url( '/' ); ?>"
        },
        {
            title: "If Statement",
            code: "<?php echo home_url( '/' ); ?>"
        },
    ];

    $scope.phpcode = $scope.phpcodes[0];

}]);

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

myApp.directive('csselementsTemplate', function(){
    return {
//      There are 3 types of directives, but we only use two types, they are:
//      Element type: that means your directive will be a new HTML tag, for example <user-card></user-card>
//      Attribute type: thats means your directive will be a attribute like <div user-card></div>
//      So restrict: 'AE' means that your directive will be both, you can use just 'A' or just 'E'
        restrict: 'AE',
        templateUrl: 'views/partials/css/elements.html'
    }
}),


'use strict';

/////////////////////
// Add Poop Filter //
/////////////////////
/**
 * All filters receive a string and parameter and returns
 * the modified string. In this filter we are checking if
 * the content of the string is 'Vanessa' if true we will
 * apply the word 'Poop' at the end of the string using +=
 */
myApp.filter('addPoop', function(){
    return function(string) {
        if (string === 'Vanessa') {
            string += ' Poop';
        }
        return string;
    };
});

//load first banner item
$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});


'use strict';

//////////////////
// User Service //
/////////////////
/**
 * This factory is responsible for managing
 * users in this application
 * @dependency  $http   Angular service to use Ajax calls
 * @return      object  All setter/getter methods for users
 */
myApp.factory('UserService', ['$http', function($http){
    return {
//      Available method(s)
//      |
//      |
//      V
        getAll: function() {
            return $http.get('api/users.json');
        }
    }
}])
