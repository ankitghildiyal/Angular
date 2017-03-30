var angularModule = angular.module('Angular', []);

angularModule.controller('AngularController', ['$scope', '$http', function ($scope, $http) {
    $http.get('../js/angularQuestions.json').success(function(data){
        $scope.qna = data;
    });
}]);