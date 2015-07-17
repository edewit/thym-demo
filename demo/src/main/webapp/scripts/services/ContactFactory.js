angular.module('demo').factory('ContactResource', function($resource){
    var resource = $resource('rest/contacts/:ContactId',{ContactId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});