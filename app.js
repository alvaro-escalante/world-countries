(function() {
   angular.module('app', ['ngRoute', 'controllers'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'pages/countries.html',
            controller: 'countryController',
            controllerAs: 'country'
        })
        .when('/:entryName', {
            templateUrl: 'pages/details.html',
            controller: 'detailCtrl',
            controllerAs: 'detail'
        })
        
        .otherwise({
            redirectTo: '/'
        });
        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    })
    .factory('countries', function($http) {
       
        function getData(callback) {
            $http({
                method: 'GET',
                url: 'countries_list.json',
                cache: true
            }).success(callback);
        }
        
       return {
        list: getData,
        find: function(name, callback) {
                getData(function(data){
                    var country = data.filter(function(index) {
                        return index.countryName === name;
                    })[0];
                    callback(country)
                })
        }
       };

    })
    .filter('encodeURI', function() {
    	return window.encodeURI;
    })
   
})();