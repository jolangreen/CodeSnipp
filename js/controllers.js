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

myApp.controller('HTMLController', function ($scope, $modal, $log, FileSaver, Blob) {

    

    $scope.colors = { css: 'views/partials/css/color/colors.html' }
    

    $scope.fontitems = [
        {
            title: 'Open Sans',
            img: null,
            html: null,
            css: 'views/partials/css/fontprimary/opensans.html',
            css2: 'views/partials/css/fontsecondary/opensans.html'
        },
        {
            title: 'Georgia',
            img: null,
            html: null,
            css: 'views/partials/css/fontprimary/georgia.html',
            css2: ''
        },
        {
            title: 'Arial',
            img: null,
            html: null,
            css: 'views/partials/css/fontprimary/arial.html',
            css2: ''
        },
        {
            title: 'Myriad Pro',
            img: null,
            html: null,
            css: 'views/partials/css/fontprimary/myriadpro.html',
            css2: 'views/partials/css/fontsecondary/myriadpro.html'
        },
    ];


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
            img: 'assets/images/header/header5.jpg',
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
            css: 'views/partials/css/banner/banner1.html'
        },
    ];

    $scope.bodyitems = [
        {
            title: 'Icon & Content',
            img: 'assets/images/body/cta1.jpg',
            html: 'views/partials/html/body/cta1.html',
            css: null,
            background: false
        },
        {
            title: 'Image With Text Overlay',
            img: 'assets/images/body/cta2.jpg',
            html: 'views/partials/html/body/cta2.html',
            css: 'views/partials/css/body/cta2.html'
        },
        {
            title: 'Image, Title & Text',
            img: 'assets/images/body/cta3.jpg',
            html: 'views/partials/html/body/cta3.html',
            css: null
        },
        {
            title: 'Gallery',
            img: 'assets/images/body/gallery.jpg',
            html: 'views/partials/html/body/gallery.html',
            css: 'views/partials/css/body/gallery.html'
        },
        {
            title: 'Content Left - Sidebar Right',
            img: 'assets/images/body/sidebar1.jpg',
            html: 'views/partials/html/body/sidebar1.html',
            css: null
        },
        {
            title: 'Content Right - Sidebar Left',
            img: 'assets/images/body/sidebar2.jpg',
            html: 'views/partials/html/body/sidebar2.html',
            css: null
        },
        {
            title: 'Media - Icons & Content List',
            img: 'assets/images/body/media-list.jpg',
            html: 'views/partials/html/body/services.html',
            css: null
        },
        {
            title: 'Content & Image Left',
            img: 'assets/images/body/content-image-left.jpg',
            html: 'views/partials/html/body/content-image-left.html',
            css: null
        },
        {
            title: 'Content & Image Right',
            img: 'assets/images/body/content-image-right.jpg',
            html: 'views/partials/html/body/content-image-right.html',
            css: null
        },
        {
            title: 'Background Image - Center',
            img: 'assets/images/body/center-img.jpg',
            html: 'views/partials/html/body/callout.html',
            css: 'views/partials/css/body/callout.html'
        },
        {
            title: 'Callout',
            img: 'assets/images/body/callout.jpg',
            html: 'views/partials/html/body/callout2.html',
            css: 'views/partials/css/body/callout.html'
        },
        {
            title: 'Background Left',
            img: 'assets/images/body/background-left.jpg',
            html: 'views/partials/html/body/background-left.html',
            css: null
        },
        {
            title: 'Background Right',
            img: 'assets/images/body/background-right.jpg',
            html: 'views/partials/html/body/background-right.html',
            css: null
        },
        {
            title: 'Form Left - Content Right',
            img: 'assets/images/body/contact.jpg',
            html: 'views/partials/html/body/contact.html',
            css: null
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
        console.log($scope.selected);
    };


    $scope.preview = function() {
      console.log('Preview Clicked');
    };

    var vm = this;

    vm.download = function() {
        var htmlContent = $('#HTMLContent').text();
        var cssLayoutContent = $('#CSSLayoutContent').text();
        var cssPageContent = $('#CSSPageContent').text();
        var cssModulesContent = $('#CSSModulesContent').text();
        var CSSVariablesContent = $('#CSSVariablesContent').text();
        var CSSBaseContent = $('#CSSBaseContent').text();
        var data = new Blob([htmlContent], { type: 'text/plain;charset=utf-8' });
        var data2 = new Blob([cssLayoutContent], { type: 'text/plain;charset=utf-8' });
        var data3 = new Blob([cssPageContent], { type: 'text/plain;charset=utf-8' });
        var data4 = new Blob([cssModulesContent], { type: 'text/plain;charset=utf-8' });
        var data5 = new Blob([CSSVariablesContent], { type: 'text/plain;charset=utf-8' });
        var data6 = new Blob([CSSBaseContent], { type: 'text/plain;charset=utf-8' });
        // Need to take these files and put it on the server in 'preview' folder
        FileSaver.saveAs(data, 'index.html');
        FileSaver.saveAs(data2, '_layout.sass');
        FileSaver.saveAs(data3, '_home.sass');
        FileSaver.saveAs(data4, '_modules.sass');
        FileSaver.saveAs(data5, '_variables.scss');
        FileSaver.saveAs(data6, '_base.sass');
        
        //var data = new Blob([allContent], { type: 'aplication/zip' });
        //FileSaver.saveAs(data, 'files.zip');
    };

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
