var angularModule = angular.module('Angular', []);

angularModule.controller('AngularController', ['$scope', '$http', function ($scope, $http) {
    $http.get('js/angularQuestion.json').success(function(data){
        $scope.qna = data;
    });
}]);