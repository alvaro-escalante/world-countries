angular.module('controllers', [])

.controller('countryController', function($http, countries) {
     _this = this;
     countries.list(function(data) {
         _this.countries = data;
     });
       
     this.sortField = '-population';
     this.reverse = true;  
})
.controller('detailCtrl', function($routeParams, $http, countries){
   _this = this;
   countries.find($routeParams.entryName, function(data) {
     _this.more = data;
    
   });
});