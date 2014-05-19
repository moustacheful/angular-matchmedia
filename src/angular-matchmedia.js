angular.module('matchMedia', []).
factory('mq',['$rootScope','$window',function($rootScope,$window){
    var mqls = {}
    var svc = {

        add: function(id,matchMediaStr){
            mqls[id] = $window.matchMedia(matchMediaStr);
            mqls[id].listener = function(m){
                svc[id] = m.matches;
                $rootScope.$apply();
            }; 
            mqls[id].addListener(mqls[id].listener)
            svc[id] = mqls[id].matches;
        },
        remove: function(id){
            mqls[id].removeListener(mqls[id].listener);
            delete mqls[id];
            delete svc[id];
            return true;

        }
    };

    return svc;
}]);