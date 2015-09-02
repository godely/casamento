var app = angular.module('WeddingCtrl', []);
app.controller('WeddingController',
  function($scope, $timeout, Notification, uiGmapGoogleMapApi) {
    $scope.map = {
      center: {
        latitude: -8.027020,
        longitude: -34.929184
      },
      zoom: 18,
      marker: {
        id: 0,
        latitude: -8.02813,
        longitude: -34.9268078,
        options: {
          visible: false
        }
      },
    };
    $scope.myGoogleMap = {};

    uiGmapGoogleMapApi.then(function(maps) {
      $scope.refreshMap = function() {
        $timeout(function() {
            $scope.myGoogleMap.refresh();
        }, 0);
      };
    });
  }
);
