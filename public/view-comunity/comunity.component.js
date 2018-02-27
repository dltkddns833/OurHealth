angular.module('comunity',[
    'ui.bootstrap',
]);

angular.module('comunity').
component('comunity',{
    templateUrl : 'view-comunity/comunity.template.html',
    controller : ['$scope',
    function comunityController($scope){
        var ctrl = this;

        ctrl.comunity_list = [
            {
                img : '../img/comunity-1.jpg',
                title : '서울과기대 헬스장 모임 만들었습니다 :)',
                name : 'PAROMA',
                date : '2017.05.26',
                like : 117,
                type : 'label-danger',
                desc : '서울과학기술대학교 피트니스 클럽 헬스장 모임 만들었습니다! 운동하면서 서로서로 코칭도 해주고 트레이닝도 같이 받아봐요! 카톡주시면 단톡방 초대해 드리겠습니다 핸드폰 010-1234-5678'
            },

            {
                img : '../img/comunity-2.jpg',
                title : '주중 점심시간 때마다 트레이닝 받으실 분 구합니다!',
                name : 'Mago',
                date : '2017.05.02',
                like : 250,
                type : 'label-danger',
                desc : '혼자 운동하기 심심하고 재능기부좀 하고싶어서 평일 점심시간 12시 부터 매일 운동하는데 트레이닝 받고 싶으신 분 연락주세요'
            },

            {
                img : '../img/comunity-3.jpg',
                title : '흰색 아디다스 신발 잃어버렸어요ㅠ',
                name : 'Udogheal',
                date : '2017.04.15',
                like : 31,
                type : 'label-success',
                desc : '15일 오후 8시쯤 운동하려고 여자 샤워실에 모르고 운동화 보관하고 옷갈아입고 나왔는데 신발이 없어졌더라구요 ㅠㅠ 카운터에 물어봤더니 못봤다고 하고 CCTV도 딱히 없어서 혹시 보신분 계시나요? ㅠ.ㅠ'
            },

            {
                img : '../img/comunity-4.jpg',
                title : '그...그녀가 보고싶습니다',
                name : '연썸짝',
                date : '2017.03.13',
                type : 'label-info',
                like : 73,
                desc : '안녕 잘지내고계신가요 저는 연락만 기다리면서 지내요 이렇게 많은 시간이 흐른거보면 끝인거겠죠? 잊을려고 해도 자꾸만 보고싶어지네요. 많은감정들을 느끼게 해줘서 고마워요. 정말 많이 좋아했어요. 쉽게 마음 못접겠어요. 잠시만 마음에 묻어둘게요, 언제든 연락주세요. 기다릴게요. 그때까지 잘지내세요'
            },

            {
                img : '../img/comunity-5.jpg',
                title : '우리동네 헬스장에 서울과기대 휘트니스 클럽이 가입되었습니다!',
                name : '서울과기대 헬스장',
                date : '2017.01.23',
                like : 363,
                type : 'label-warning',
                desc : '우리동네 헬스장에 서울과기대 휘트니스 클럽이 가입되었습니다! 회원들에게 더 편한 운동과 서비스를 제공해 드리겠습니다^^'
            },

        ]
    }]
});