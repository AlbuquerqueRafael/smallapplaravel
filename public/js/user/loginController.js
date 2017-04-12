angular.module("smallapp").controller("loginController", ['userService', '$scope', function(userService, $scope){
	$scope.user = {}
	$scope.token = {}
	// method for login
	$scope.login = function(teste) {
		// trying to do the authentication
		userService.login($scope.user.mail, $scope.user.password, teste).then(function(res) {
				$scope.password = null;
				console.log(res)
				// saving the user on the service
				userService.authUser(res)
			}, function errorCallback(response)  {
				console.log(response)
				$scope.messages = []
				// if authentication was not successful. Setting the error message.
				$scope.messages.push(response.data)
			});
	};

}]);
