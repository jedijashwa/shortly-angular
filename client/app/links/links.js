angular.module('shortly.links', [])

.controller('LinksController', function LinksController ($scope, Links) {
  angular.extend($scope, Links);
  $scope.listTemplate = 'app/links/linkList.html';
  $scope.navigation = 'navigation.html';
    setTimeout(function () {
    var tempLinks = $scope.getLinks();
    for (var i = 0; i < tempLinks.length; i++) {
      setTimeout(function( ) {
        $scope.data.links.push(tempLinks[i]);
      }, 300);
    }
  }, 300);
});