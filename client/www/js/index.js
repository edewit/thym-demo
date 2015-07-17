angular.module('ionicApp', ['ionic'])
.controller('MainCtrl', function($scope, $http) {
	$scope.fetch = function() {
		$http.get('http://localhost:8080/demo/rest/contacts/').then(function(resp) {
			$scope.items = resp.data;
		}, function(err) {
			alert('could not get data!');
		}).finally(function() {
	       // Stop the ion-refresher from spinning
	       $scope.$broadcast('scroll.refreshComplete');
		});
	};
	$scope.fetch();
});
