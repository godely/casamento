var app = angular.module('AdminCtrl', []);
app.controller('AdminController', [
	'$scope',
  'Notification',
  'AdminFactory',
	function($scope, Notification, admin) {
    $scope.gift = {};
    $scope.gifts = [];
    $scope.egift = {};
    $scope.buyers = [];
    $scope.depos = [];
    $scope.rsvps = [];
    $scope.giftName = {};
		$scope.createGift = function() {
      admin.addGift($scope.gift).then(function(data) {
        Notification(data.msg);
        if (!data.err) {
          var pass = $scope.gift.password;
          $scope.gift = {};
          $scope.gift.password = pass;
          $scope.gifts.push(data.obj);
        }
      });
    };

    var getGifts = function() {
      admin.getGifts().then(function(data) {
        $scope.gifts = data.gifts;
        for (var i = 0; i < data.gifts.length; i++) {
          $scope.giftName[data.gifts[i]._id] = data.gifts[i].name;
        }
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

    $scope.deleteBuyer = function(id) {
      admin.deleteBuyer({id: id});
      $scope.buyers = $scope.buyers.filter(function(obj) {
        return obj._id !== id;
      });
    };

    var getBuyers = function() {
      admin.getBuyers().then(function(data) {
        $scope.buyers = data.buyers;
      });
    };
    getBuyers();

    $scope.deleteRSVP = function(id) {
      admin.deleteRsvp({id: id});
      $scope.rsvps = $scope.rsvps.filter(function(obj) {
        return obj._id !== id;
      });
    };

    var getRsvps = function() {
      admin.getRsvps().then(function(data) {
        $scope.rsvps = data.rsvps;
      });
    };
    getRsvps();

    $scope.deleteDepo = function(id) {
      admin.deleteDepo({id: id});
      $scope.depos = $scope.depos.filter(function(obj) {
        return obj._id !== id;
      });
    };

    $scope.updateDepo = function(p) {
      admin.updateDepo({id: p._id, active: p.active});
    };

    var getDepos = function() {
      admin.getDepos().then(function(data) {
        $scope.depos = data.depos;
      });
    };
    getDepos();
	}
]);
