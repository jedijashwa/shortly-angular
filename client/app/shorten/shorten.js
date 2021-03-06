angular.module('shortly.shorten', [])

.controller('ShortenController', function ShortenController ($scope, $location, Links, $http) {

  $scope.data = {
    links: []
  };
  
  $scope.link = {};
  $scope.listTemplate = 'app/links/linkList.html';
  $scope.navigation = 'navigation.html';

  $scope.addLink = function (link) {
    return $http({
      method: 'POST',
      url: '/api/links',
      data: link
    })
    .then(function (result){
      $scope.link = {};
      $scope.shortenForm.$setPristine();
      $scope.data.links.push(result.data);
    });
  };
});