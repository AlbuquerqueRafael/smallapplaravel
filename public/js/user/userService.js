'use strict';

angular.module('smallapp').factory('userService', ['$http', '$window', '$location',
                                                   function($http, $window, $location){
    var service = {};

    service.login = function(mail, pass, token){
    	var data = { username: mail, password: pass};

    	return $http({
  			url : '/user/login',
        headers: {
          'X-CSRF-TOKEN': token
        },
  			method : "POST",
  			params : {
  				username : mail,
  				password : pass
  			}
    	});
    }

    service.getLoggedUser = function(){
    	return $window.sessionStorage.getItem('user')
    }

    service.logout = function(){
    	$window.sessionStorage.clear();
    	$location.path('/');
    }

    service.authUser = function(res){

		// setting the user in AuthService
		  $window.sessionStorage.setItem('user', JSON.stringify(res.data));
      $location.path('/home');
    }


	return service;
}]);
