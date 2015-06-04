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

    $scope.selected.bodyitemx = [ ];


    $scope.select = function(item, type) {
        if(type == 'body') {
          $scope.selected.bodyitemx.push(item);
        } else {
          $scope.selected[type]=item;
        };
    };

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
