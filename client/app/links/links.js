angular.module('shortly.links', [])

.controller('LinksController', function LinksController ($scope, Links) {
  angular.extend($scope, Links);
  $scope.getLinks();
});