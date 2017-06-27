; (function () {

    angular
        .module('angularstarter')
        .config(['$httpProvider', function ($httpProvider) {
            $httpProvider.defaults.useXDomain = true;
            $httpProvider.defaults.withCredentials = false;
            delete $httpProvider.defaults.headers.common["X-Requested-With"];
            $httpProvider.defaults.headers.post["Content-Type"] = 'application/json';
            $httpProvider.defaults.headers.common["Accept"] = "application/json";
            $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
        }])
        // .config(["$locationProvider", function($locationProvider) {
        //     $locationProvider.hashPrefix(''); // by default '!'
        //     $locationProvider.html5Mode(true);
        // }])


})();
