angular.module('reservation',[
    'ui.bootstrap',
]);

angular.module('reservation').
component('reservation',{
    templateUrl : 'view-reservation/reservation.template.html',
    controller : ['$scope', '$log',
    function reservationController($scope, $log){
        var ctrl = this;
        // 진행 프로그래스 바
        ctrl.stacked = [];
        // 시작 시간 설정
        ctrl.start_date = new Date();
        ctrl.start_hstep = 1;
        ctrl.start_mstep = 1;
        ctrl.start_ismeridian = true;
        ctrl.startTime = ctrl.start_date.getTime()
        // 운동시간 설정
        ctrl.health_hstep = null;
        ctrl.health_options = {
            hstep: [60, 120, 180]
        };

        // 종료시간 설정


        // 기구 설정
        ctrl.tools_step = null;
        ctrl.tools_options = {
            tools: ['Bench press', 'Peck deck fly', 'Squat rack', 'Smith machine', 'Dumbbell', 'Barbell', 'Cattle bell', 'Lat pull down', 'Leg press', 
                    'Cable machine', 'Seated row machine', 'Back extension', 'Shoulder press machine', 'Seated chest press']
        };

        // 기구 시작시간 설정
        ctrl.toolStart_time = ctrl.start_date;
        ctrl.toolStart_time_hstep = 1;
        ctrl.toolStart_time_mstep = 1;
        ctrl.toolStart_time_ismeridian= true;
        ctrl.toolStartTime = ctrl.toolStart_time.getTime();

        // 기구 사용시간 설정
        ctrl.toolTime_step = null;
        ctrl.tool_time = {
            minute : [5, 15, 30]
        };

        ctrl.tools_list = [
            {
                name : null,
                time : null
            }
        ]
        ctrl.start_changed = function () {
            ctrl.startTime = ctrl.start_date.getTime()
        };

        ctrl.toolStart_changed = function(){
            ctrl.toolStartTime = ctrl.toolStart_time.getTime();
        }
        
        //기구 사용전 남는 시간
        ctrl.onClickMathTime = function(){
            var types = ['success', 'info', 'warning', 'danger'];
            var index = Math.floor(Math.random() * 4);

            // 총 운동 시간 계산
            ctrl.totalTime = ctrl.health_hstep * 60 * 1000
            // 이용시간 계산
            if(ctrl.toolTime_step != null){
                ctrl.toolTime =  (ctrl.toolTime_step * 60 * 1000) / ctrl.totalTime * 100;
            }
            else{
                ctrl.toolTime = 0;
            }
            // 사용전 남는시간 계산
            ctrl.mathFreeTime = (ctrl.toolStartTime - ctrl.startTime) / ctrl.totalTime * 100;
            // 남은 시간 설정
            ctrl.stacked.push({
                name : '',
                value : ctrl.mathFreeTime,
                time : '',
                type : 'default'
            });
            // 이용 시간 설정
            ctrl.stacked.push({
                name : ctrl.tools_step,
                value : ctrl.toolTime,
                time : ctrl.toolTime_step,
                type : types[index]
            });

            // 남은 총시간
            // ctrl.remainTime = (ctrl.totalTime - (ctrl.toolTime / 100 + ctrl.mathFreeTime / 100)) / 1000 / 60;
            ctrl.remainTime = (ctrl.totalTime - (ctrl.toolTime_step * 60 * 1000+ ctrl.toolStartTime - ctrl.startTime)) / 1000 / 60;
            console.log(ctrl.stacked);

            // 초기화
            ctrl.tools_step = null;
            ctrl.toolTime_step = null;

        }

        ctrl.onSeccessButtonClicked = function(){
            alert('예약이 등록되었습니다.');
        }
    }]
});