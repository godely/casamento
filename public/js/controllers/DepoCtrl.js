var app = angular.module('DepoCtrl', []);
app.controller('DepoController', [
	'$scope',
  '$interval',
  'Notification',
  'AdminFactory',
	function($scope, $interval, Notification, admin) {
    $scope.data = {
      name: '',
      text: ''
    };
    $scope.depos = [];
    $scope.depoInd = [0,1,2];

    $interval(function() {
      if ($scope.depos.length > 3) {
        for (var i = 0; i < 3; i++) {
          $scope.depoInd[i] = ($scope.depoInd[i]+3) % $scope.depos.length;
        }
      }
    }, 30000);
    
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

    function shuffle(o){
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
    }

    var getActiveDepos = function() {
      admin.getActiveDepos().then(function(data) {
        $scope.depos = shuffle(data.depos);

      });
    }
    getActiveDepos();

	}
]);
