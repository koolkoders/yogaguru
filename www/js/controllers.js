angular.module('yoga.controllers', [])

.controller('HomeCtrl', function($scope, Yoga) {
  $scope.yogaCategories = Yoga.allCategories();
})

.controller('ActivityCtrl', function($scope, Yoga) {
  $scope.activities = Yoga.allActivites();
})

.controller('YogaDetailCtrl', function($scope, $stateParams, Yoga) {
  $scope.yoga = Yoga.get($stateParams.yogaId);
  $scope.yogaItems = Yoga.getItems($stateParams.yogaId);
})

.controller('SettingsCtrl', function($scope) {
});

