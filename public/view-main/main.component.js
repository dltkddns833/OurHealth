angular.module('main',[
    'ui.bootstrap',
]);

angular.module('main').
component('main',{
    templateUrl : 'view-main/main.template.html',
    controller : ['$scope',
    function mainController($scope){
        var ctrl = this;
        ctrl.date = new Date();
        ctrl.randomValue = Math.floor((Math.random()*90)+10);
        
        if(ctrl.randomValue < 50){
            ctrl.randomType = 'success';
            ctrl.randomText = '원활';
        }
        else if(ctrl.randomValue >= 50 && ctrl.randomValue < 75){
            ctrl.randomType = 'info';
            ctrl.randomText = '혼잡';
        }
        else if(ctrl.randomValue >= 75){
            ctrl.randomType = 'danger';
            ctrl.randomText = '매우 혼잡';
        }
    }]
});