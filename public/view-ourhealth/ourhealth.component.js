angular.module('ourhealth',[

]);

angular.module('ourhealth').
component('ourhealth',{
    templateUrl : 'view-ourhealth/ourhealth.template.html',
    controller : ['$scope', '$window',
    function ourhealthController($scope, $window){
        // var ctrl = this;
        // console.log('ourhealth Page Open');
        // var window = angular.element($window);
        // ctrl.window_height =  window.height();
        // console.log(ctrl.window_height);
    }]
});