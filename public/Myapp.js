var Myapp = angular.module('Myapp',[   
    'ngRoute',
    'ui.bootstrap',
    'ourhealth',
    'main',
    'reservation',
    'comunity',
    'today',
    'market',
]).
config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('!');
    $routeProvider.
    // when('/',{
    //     controller : 'Mycontroller',
    //     templateurl : 'index.html',
    // }).
    when('/ourhealth',{
        template : '<ourhealth></ourhealth>'
    }).
    when('/main',{
        template : '<main></main>'
    }).
    when('/reservation',{
        template : '<reservation></reservation>'
    }).
    when('/comunity',{
        template : '<comunity></comunity>'
    }).
    when('/today',{
        template : '<today></today>'
    }).
    when('/market',{
        template : '<market></market>'
    }).
    otherwise({redirectTo: '/main'});
});

Myapp.controller('Mycontroller', function($scope, $state){
    console.log('Hello Frist controller');
    $scope.state = $state;
    console.lot($scope.state);
});