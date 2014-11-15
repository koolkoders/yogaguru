angular.module('yoga.controllers', [])

.controller('HomeCtrl', function($scope, YogaService) {
  $scope.yogaCategories = YogaService.allCategories();
})

.controller('ActivityCtrl', function($scope, YogaService) {
  $scope.activities = YogaService.allActivites();
})

.controller('YogaDetailCtrl', function($scope, $stateParams, YogaService) {
  $scope.category = YogaService.getItem($stateParams.yogaId);
  $scope.categoryItems = YogaService.getCategoryItems($stateParams.yogaId);
})

.controller('YogaType1Ctrl', function($scope, $stateParams, YogaService, MediaService, $cordovaMedia, $ionicLoading) {
  $scope.yoga = YogaService.getItem($stateParams.yogaId);

  var mHandle;
  $scope.doPlay = function() {
    if (mHandle == null) {
      MediaService.loadMedia($scope.yoga.sound).then(function(media){
        mHandle = media;
        $cordovaMedia.play(media);
      });
    } else {
      $cordovaMedia.play(mHandle);
    }
    
    $scope.mediaStatus = "Playing sound...";
  }

  $scope.doPause = function() {
    if (mHandle != null) {
      mHandle.pause();
      $scope.mediaStatus = "Paused sound...";
    }
  }
  $scope.doStop = function() {
    if (mHandle != null) {
      mHandle.stop();
      mHandle = null;
      $scope.mediaStatus = "Stopped sound...";
    }
  }
})

.controller('SettingsCtrl', function($scope) {
});

