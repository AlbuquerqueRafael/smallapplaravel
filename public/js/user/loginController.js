angular.module("smallapp").controller("loginController", ['userService', '$scope', function(userService, $scope){
	$scope.user = {}
	$scope.token = {}
	// method for login
	$scope.login = function(token) {
		// trying to do the authentication
		userService.login($scope.user.mail, $scope.user.password, token).then(function(res) {
				$scope.password = null;
				// saving the user on the service
				userService.authUser(res)
			}, function errorCallback(response)  {
				$scope.messages = []
				// if authentication was not successful. Setting the error message.
				$scope.messages.push(response.data)
			});
	};

}]);
