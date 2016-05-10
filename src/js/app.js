angular.module("countModule", [])
    .controller("countCtrl", function ($scope) {
        $scope.qty = 0;
        $scope.start = 0;
        $scope.qty = $scope.start;
        $scope.color = 'red';
        $scope.txtcolor = 'white';
        $scope.size = 15;
        $scope.mode = 1;//метка
        $scope.show_next = false;//показать следующий номер
        var temp = 0;


        //показать/скрыть следующий номер
        $('.show-next').change(function() {
            console.log($scope.show_next);
            if($scope.show_next)
            {
                $('#next_log').css('display','block');
            }
            else
            {
                $('#next_log').css('display','none');
            }
        });

        //$('.sign').change(function(){
        //    //console.log($scope.mode);
        //    if($scope.mode == 2)
        //    {
        //        $('#next_log').css('display','block');
        //    }
        //});

        //изменение начала отсчета
        $('#start').change(function(){
            temp = $scope.start;
        });

        //размер метки
        $('#size').change(function(){
            $('.mark').css({
                'height':$scope.size,
                'width':$scope.size
            });
        });

        $scope.qty = $scope.start;
        //метки на поле
        $scope.handleEvent = function (e) {
            //$scope.qty++;
            temp++;
            $scope.qty = temp;
            var elemid = $scope.qty;
            var X = (e.pageX) - 7;
            var Y = (e.pageY) - 7;
            if($scope.mode == 1)
            {
                $('#main').append('<span id="'+elemid+'" class="glyphicon glyphicon-ok new"></span>');
            }
            else
            {
                $('#main').append('<span id="'+elemid+'" class="new"><b>'+$scope.qty+'</b></span>');
            }
            $('#'+elemid).css({
                'color':$scope.color,
                'font-size':$scope.size,
                'position':'absolute',
                'top':Y,
                'left':X
            });

        };

        //очистка поля
        $scope.resetAll = function (e) {
            $scope.qty = 0;
            $scope.start = 0;
            $scope.color = 'red';
            $scope.txtcolor = 'white';
            $scope.size = 15;
            $scope.mode = 1;
            temp = $scope.start;
            $scope.show_next = false;
            $('#next_log').css('display','none');
            $(".new").remove();
        }

    });