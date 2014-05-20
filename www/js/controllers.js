angular.module('starter.controllers', ['ionic'])

.controller('AreaCtrl', function($scope, Areas) {
	$scope.areas = Areas.all();
})

.controller('MansionCtrl', function($scope,$stateParams, Areas, $ionicNavBarDelegate) {
	$scope.mansions = Areas.get($stateParams.areaId);
})

.controller('DashCtrl', function($scope, $ionicSideMenuDelegate) {
})

.controller('ContentController', function($scope, $ionicSideMenuDelegate) {
	
})

.controller('AccountCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('MenuCtrl', function($scope) {
});
