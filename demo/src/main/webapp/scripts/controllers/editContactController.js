

angular.module('demo').controller('EditContactController', function($scope, $routeParams, $location, ContactResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.contact = new ContactResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/Contacts");
        };
        ContactResource.get({ContactId:$routeParams.ContactId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.contact);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.contact.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/Contacts");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/Contacts");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.contact.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});