
angular.module('yoga.controllers', [])

.controller('HomeCtrl', function($scope, YogaService) {
  $scope.yogaCategories = YogaService.allCategories();
})

.controller('ActivityCtrl', function($scope,  YogaService) {
  $scope.activities = YogaService.allActivites();
})

.controller('YogaActivityCtrl', function($scope, $stateParams, YogaService) {//chaning this.
    $scope.activities = YogaService.detailActivites($stateParams.id);
})

.controller('YogaDetailCtrl', function($scope, $stateParams, YogaService) {
  $scope.category = YogaService.getItem($stateParams.yogaId);
  $scope.categoryItems = YogaService.getCategoryItems($stateParams.yogaId);
})

.controller('YogaType1Ctrl', function($scope, $stateParams, YogaService, MediaService, $cordovaMedia, $ionicLoading) {
  $scope.yoga = YogaService.getItem($stateParams.yogaId);

    // Prefill the slider to 5
  $scope.rounds = 5;
  var maxRounds = 12;
  
  // Add one second to the slider
  $scope.upOne = function() {
    if ($scope.rounds < maxRounds) {
      $scope.rounds = parseFloat($scope.rounds) + 1;
    }
  }
  // Remove one second from the slider
  $scope.downOne = function() {
    if ($scope.rounds > 0) {
      $scope.rounds = parseFloat($scope.rounds) - 1;
    }
  }
  
  // Format the time to something readable
//  $scope.$watch(function() {
//    $scope.duration = moment.duration($scope.rounds*1, "minutes").format("mm", { trim: false });
//  });
  
  var audioHandle;
  var mediaStatusFunc = function(status) {
    var mStatus = MediaService.getStatusMessage(status);
    $scope.mediaStatus = mStatus;
    if (mStatus == 'Media.MEDIA_STOPPED') {

    }
  }
  $scope.doPlay = function() {
    var timer = document.getElementsByTagName('timer')[0];     
    if (audioHandle == null) {
      MediaService.loadMedia($scope.yoga.sound, null, mediaStatusFunc, null).then(function(media){
        audioHandle = media;
        $cordovaMedia.play(media);
        timer.start();
      });
    } else {
      $cordovaMedia.play(audioHandle);
      timer.resume();
    }
    
    $scope.mediaStatus = "Playing sound...";
  }

  $scope.doPause = function() {
    var timer = document.getElementsByTagName('timer')[0];      
    if (audioHandle != null) {
      $cordovaMedia.pause(audioHandle);
      timer.stop();
      //$scope.mediaStatus = "Paused sound...";
    }
  }
  $scope.doStop = function() {
    var timer = document.getElementsByTagName('timer')[0];      
    if (audioHandle != null) {
      $cordovaMedia.stop(audioHandle);
      audioHandle = null;
      timer.stop();
     // $scope.mediaStatus = "Stopped sound...";
    }
  }
})

.controller('SettingsCtrl', function($scope) {
});

