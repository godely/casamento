var app = angular.module('AdminCtrl', []);
app.controller('AdminController', [
	'$scope',
  'Notification',
  'AdminFactory',
	function($scope, Notification, admin) {
    $scope.gift = {};
    $scope.gifts = [];
    $scope.egift = {};
		$scope.createGift = function() {
      admin.addGift($scope.gift).then(function(data) {
        Notification(data.msg);
        var pass = $scope.gift.password;
        $scope.gift = {};
        $scope.gift.password = pass;
        $scope.gifts.push(data.obj);
      });
    };

    var getGifts = function() {
      admin.getGifts().then(function(data) {
        $scope.gifts = data.gifts;
        $scope.categories = $scope.gifts.reduce(function(p, c) {
          if (c.category && c.category.length > 0 && p.indexOf(c.category) < 0) p.push(c.category);
          return p;
        }, []);
      });
    };
    getGifts();

    $scope.removeGift = function() {
      admin.removeGift({id: $scope.egift._id, password: $scope.egift.password}).then(function(data) {
        Notification(data.msg);
        if (!data.err) {
          $scope.gifts = $scope.gifts.filter(function(obj) {
            return obj._id !== $scope.egift._id;
          });
        }
      });
    };

    $scope.editGift = function(gift) {
      $scope.egift = gift;
      $('#modal1').openModal();
    };

    $scope.edit = function() {
      admin.editGift($scope.egift).then(function(data) {
        Notification(data.msg);
      });
    };
	}
]);
