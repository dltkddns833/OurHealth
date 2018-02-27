angular.module('today',[
    'ui.bootstrap',
]);

angular.module('today').
component('today',{
    templateUrl : 'view-today/today.template.html',
    controller : ['$scope',
    function todayController($scope){
        var ctrl = this;

        ctrl.health_list = [
            {
                img : '../img/main-health.png',
                title : '다가오는 여름을 준비하세요!',
                desc : '복부와 옆구리살, 등살을 잡아주는 운동법'
            },

            {
                img : '../img/main-health1.jpg',
                title : '헬스장 가기 전, 꼭 해야할 기초운동',
                desc : '헬스장 입문 전, 헬스 초보라면 일단 이 운동들 부터 시작하자!'
            },

            {
                img : '../img/main-health2.jpg',
                title : '여성여성한 목선과 어깨라인 만드는 운동',
                desc : '뒤에서 봐도 예쁜 여성스러운 목선 만드는 운동'
            },

            {
                img : '../img/main-health3.jpg',
                title : '등운동 루틴 순서 BEST5',
                desc : '등근육 만들기 운동종류, 헬스장에서 운동법'
            },

            {
                img : '../img/main-health4.jpg',
                title : 'BEST 초보자 맨몸 운동',
                desc : '초보자와 운동 입문자를 위한 맨몸운동 시리즈'
            },
        ]
    }]
});