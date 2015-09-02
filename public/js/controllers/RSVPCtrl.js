var app = angular.module('RSVPCtrl', []);
app.controller('RSVPController', [
  '$scope',
  'Notification',
  'AdminFactory',
  function($scope, Notification, admin) {
    $scope.data = {
      name: '',
      count: "0",
      rsvp: true
    };
    $scope.submit = function() {
      if ($scope.data.name == '' || !$scope.data.name) {
        Notification.error('Por favor, digite seu nome.');
      } else {
        admin.addRsvp($scope.data).then(function(data) {
          Notification.success(data.msg);
          if (!data.err) {
            $scope.data = {
              name: '',
              count: "0",
              rsvp: true
            };
          }
        });
      }
    };
  }
]);
