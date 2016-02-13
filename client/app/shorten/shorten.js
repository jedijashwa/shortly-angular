angular.module('shortly.shorten', [])

.controller('ShortenController', function ShortenController ($scope, $location, Links, $http) {
  $scope.link = {};
  $scope.addLink = function (link) {
    return $http({
      method: 'POST',
      url: '/api/links',
      data: link
    })
    .then(function (result){
      $scope.link.url = '';
      console.log(result);
    });
  };
});
