;(function() {

  angular
    .module('angularstarter')
    .run(['ngMeta', function(ngMeta) { 
        ngMeta.init();
    }]);
   


})();
