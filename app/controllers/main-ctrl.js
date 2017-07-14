/**
 * Main application controller 
 **/
; (function () {

    angular.module('angularstarter')
        .controller('MainCtrl', ['$scope', '$rootScope', '$http', '$state', '$timeout', '$window', 'localStorageService', function ($scope, $rootScope, $http, $state, $timeout, $window, localStorageService) {

            $rootScope.swal_success_redir = function (text, state) {
                swal({
                    title: "Success",
                    text: text,
                    type: "success",
                    showCancelButton: false,
                    confirmButtonText: "OK",
                    closeOnConfirm: true
                }, function () {
                    $timeout(function () {
                        $state.go(state);
                    }, 1000);

                });
            }

            $scope.year = moment().format("YYYY");

        }])


})();