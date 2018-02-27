angular.module('market',[
    'ui.bootstrap',
]);

angular.module('market').
component('market',{
    templateUrl : 'view-market/market.template.html',
    controller : ['$scope',
    function marketController($scope){
        var ctrl = this;

        ctrl.market_list = [
            {
                img : '../img/main-market-img.jpg',
                title : 'BSN 단백질보충제 초콜렛 밀크쉐이크',
                charge : '47,300원 (10g당 208원)',
                type : true
            },

            {
                img : '../img/main-market1.jpg',
                title : '반석스포츠 비스펙 치닝디핑기구',
                charge : '59,000원',
                type : false
            },

            {
                img : '../img/main-market2.jpg',
                title : '4구 헬스 장갑 XPG-400, 블랙',
                charge : '9,600원',
                type : true
            },

            {
                img : '../img/main-market3.jpg',
                title : '이지바이 남성용 쾌속건조 기능성 쿨론 긴팔 라운드 티셔츠',
                charge : '6,900원',
                type : false
            },

            {
                img : '../img/main-market4.jpg',
                title : '파워슬라이드 웨이트 트레이닝',
                charge : '14,900원',
                type : false
            },
        ]
    }]
});