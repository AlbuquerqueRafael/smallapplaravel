'use strict';

angular.module("smallapp", ['ngRoute'])

.config(function($locationProvider, $routeProvider) {
	$routeProvider
    .when('/', {
    	templateUrl: '/js/user/login.html',
    	controller: 'loginController'
    })

    .when('/home', {
    	templateUrl: '/js/home/home.html',
    	controller: 'homeController'
    })

	$routeProvider.otherwise({
		redirectTo: '/'
	});


    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

})

.run(function($rootScope, $location, $http, userService){
	$rootScope.$on('$routeChangeStart', function(event, next, current) {
		var user = JSON.parse(userService.getLoggedUser());

		//Changes the main page depending if the user is logged or not and deals with logout

		if($location.path() === "/" && user !== null){
	    	$location.path("/home");
	    }else if($location.path() !== "/" && user === null){
	    	$location.path("/");
	    }

	});
});
