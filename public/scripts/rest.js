angular.module("snippet", ['restangular'])

angular.module("snippet").controller('snippetCtrl', function($scope,$filter,$http, Restangular){

    //$scope.frameworks = Restangular.all('frameworks').getList().$object;
    $scope.languages = Restangular.all('languages').getList().$object;
    var orderBy = $filter('orderBy');

    /*$http.get("/snippets", function(data){
        console.log(data);
    })*/

    /*$http.get("/framework", function(data){
        $scope.framework = data.name;
    })*/



    $scope.search = function(query){
        $http({
            method: 'GET',
            url: '/snippets/search?query='+query
        }).then(function successCallback(response) {
            $scope.snippets = response.data;
        }, function errorCallback(response) {
            alert("there is no code");
        });
    }
    $http({
        method: 'GET',
        url: '/snippets'
    }).then(function successCallback(response) {
        $scope.snippets = response.data;

    }, function errorCallback(response) {
        alert("there is no code");
    });

    $scope.framework_find = function() {

        $http({
            method: 'GET',
            url: '/frameworks/search?query=' + $scope.frame_query.name
        }).then(function successCallback(response) {
            $scope.frameworks = response.data;
            $http({
                method: 'GET',
                url: '/snippets/language_search?query='+$scope.frame_query.name
            }).then(function successCallback(response) {
                $scope.snippets = response.data;
            }, function errorCallback(response) {
                alert("there is no code");
            });
        }, function errorCallback(response) {
            alert("there is no code");
        });
    }

    $scope.language_find = function() {

        $http({
            method: 'GET',
            url: '/snippets/framework_search?query=' + $scope.language_query.name
        }).then(function successCallback(response) {
            $scope.snippets = response.data;
        }, function errorCallback(response) {
            alert("there is no code");
        });
    }

    /*var snippets = Restangular.all('snippets').getList().$object;

    $scope.snippets = snippets;
    $scope.order = function(predicate, reverse) {
        $scope.snippets = orderBy($scope.snippets, predicate, reverse);
    };*/
})

