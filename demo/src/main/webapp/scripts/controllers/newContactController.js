
angular.module('demo').controller('NewContactController', function ($scope, $location, locationParser, ContactResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.contact = $scope.contact || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/Contacts/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        ContactResource.save($scope.contact, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Contacts");
    };
});