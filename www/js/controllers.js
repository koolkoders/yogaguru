angular.module('yoga.controllers', [])

.controller('HomeCtrl', function($scope, Yoga) {
  $scope.yogaCategories = Yoga.allCategories();
})

.controller('ActivityCtrl', function($scope, Yoga) {
  $scope.activities = Yoga.allActivites();
})

.controller('YogaDetailCtrl', function($scope, $stateParams, Yoga) {
  $scope.category = Yoga.getItem($stateParams.yogaId);
  $scope.categoryItems = Yoga.getCategoryItems($stateParams.yogaId);
})

.controller('YogaType1Ctrl', function($scope, $stateParams, Yoga) {
  $scope.yoga = Yoga.getItem($stateParams.yogaId);
})

.controller('SettingsCtrl', function($scope) {
});

