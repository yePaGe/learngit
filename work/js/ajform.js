angular.module('myApp',[])
    .controller('MainController',function ($scope) {
        $scope.userData={};
        $scope.submitForm = function () {
            console.log($scope.userData);
        }
    });
