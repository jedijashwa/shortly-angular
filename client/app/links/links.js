angular.module('shortly.links', [])

.controller('LinksController', function LinksController ($scope, Links) {
  angular.extend($scope, Links);
  $scope.links = $scope.getLinks();
  $scope.listTemplate = 'app/links/linkList.html';
  $scope.navigation = 'navigation.html';
});