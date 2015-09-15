var app = angular.module('GiftsCtrl', []);
app.controller('GiftsController', [
  '$scope',
  'Notification',
  'AdminFactory',
  function($scope, Notification, admin) {
    $scope.gifts = [];
    $scope.category = "";

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

    $scope.catFilt = function(value) {
      return $scope.category === "" || $scope.category === value.category;
    };

    $scope.buyGift = function(gift) {
      $scope.bgift = gift;
      $('#modal1-' + gift.code).openModal();
    };

    $scope.buy = {};

    $scope.buyIt = function() {
      admin.addBuyer({
        name: $scope.buy.name,
        message: $scope.buy.message,
        gift: $scope.bgift._id
      });
      $scope.bgift = {};
      $scope.buy = {};
      $('#modal1-' + gift.code).closeModal();
      $('#modal2-' + gift.code).openModal();
    };
  }
]);
