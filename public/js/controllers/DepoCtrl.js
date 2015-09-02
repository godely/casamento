var app = angular.module('DepoCtrl', []);
app.controller('DepoController', [
	'$scope',
  'Notification',
  'AdminFactory',
	function($scope, Notification, admin) {
    $scope.data = {
      name: '',
      text: ''
    };
    
    $scope.submit = function() {
      var data = $scope.data;
      if (!data.name || !data.text || data.name.length == 0 || data.text.length == 0) {
        Notification.error('Você não pode escrever um depoimento vazio ou sem nome.');
      } else {
        admin.addDepo($scope.data).then(function(data) {
          Notification.success(data.msg);
          $scope.data = {name: '', text: ''};
        });
      }
    };

	}
]);
