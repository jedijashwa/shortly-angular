angular.module('shortly.shorten', [])

.controller('ShortenController', function ShortenController ($scope, $location, Links, $http) {

  $scope.rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;

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
      $scope.data.links.push(result.data);
    });
  };
  
  // function for checking valid url
  
  // function for checking if empty string
});