; (function () {

    angular
        .module('angularstarter', [
            'ngAnimate',
            'ngSanitize',
            'ngAria',
            'ui.router',
            'LocalStorageModule',
            'ngResource',
            'ngMeta'
        ])
        .config(config);

    config.$inject = ['$locationProvider', '$httpProvider', '$compileProvider', '$urlRouterProvider', '$stateProvider', 'ngMetaProvider'];

    /**
     * App routing
     *
     * You can leave it here in the config section or take it out
     * into separate file
     * 
     */

    function config($locationProvider, $httpProvider, $compileProvider, $urlRouterProvider, $stateProvider, ngMetaProvider) {
        ngMetaProvider.useTitleSuffix(true);
        ngMetaProvider.setDefaultTitleSuffix('');

        // $locationProvider.html5Mode(true);

        $stateProvider

            .state('home', {
                url: '/',
                templateUrl: 'views/home.html',
                controller: 'MainCtrl',
                data: {
                    requireLogin: false,
                    meta: {
                        'title': 'Angular Starter Kit',
                        'description': 'Innovation Hub home page',
                        'titleSuffix': ' - Home'
                    }
                }
            })

            .state('contact', {
                url: '/contact',
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl',
                data: {
                    requireLogin: false,
                    meta: {
                        'title': 'Angular Starter Kit',
                        'titleSuffix': ' - Contact',
                        'description': 'Angular Starter Kit Contact Page'
                    }
                }
            })

        $urlRouterProvider.otherwise('/');


    }


    /**
     * Run block
     */
    angular
        .module('angularstarter')
        .run(run);

    run.$inject = ['$http', '$rootScope', '$location', '$state', '$timeout', 'localStorageService'];

    function run($http, $rootScope, $location, $state, $timeout, localStorageService) {

        $rootScope.user = {};


        // put here everything that you need to run on page load
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

            var requireLogin = toState.data.requireLogin;
            if (requireLogin === true && !$rootScope.isLoggedIn) {
                event.preventDefault();
                $state.go('signin', null, { reload: true });
            }

        });

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams, stateParams) {

            $rootScope.currentroute = $state.current.name;
            $rootScope.currentroute_parrent = $state.current.data.parent;

        });

    }


})();