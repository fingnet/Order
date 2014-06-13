angular.module('starter.controllers', ['ionic'])

.controller('AreaCtrl', function($scope, Areas) {
	$scope.areas = Areas.all();
})

.controller('MansionCtrl', function($scope,$stateParams, Areas, $ionicNavBarDelegate) {
	$scope.mansions = Areas.get($stateParams.areaId);
})

.controller('DashCtrl', function($scope, Foods, Menus, $ionicSideMenuDelegate, $ionicActionSheet) {
	$scope.cates = Foods.all();
	$scope.list = Menus.all();
	$scope.add = function(food, num){
		num = $scope.list[food.food_id] ? $scope.list[food.food_id].num + num : num;
		Menus.set(food, num);
		$scope.sum();
	};

	$scope.reset = function(){
		Menus.reset();
		$scope.list = Menus.all();
		$scope.sum();
	}

	$scope.sum = function(){
		$scope.cost = Menus.sum('cost');
		$scope.count = Menus.sum('num');
	}
	$scope.sum();
})

.controller('ContentController', function($scope, $ionicSideMenuDelegate) {
	
})

.controller('AccountCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('MenuCtrl', function($scope, Menus) {
	$scope.menus = Menus.all();
	$scope.cost = Menus.sum('cost');
})

.controller('OrderCtrl', function($scope, Menus, $location) {
	$scope.cost = Menus.sum('cost');
	$scope.form = {};
	$scope.submit = function(){
		console.log($scope.form);
		alert('您的订单已经提交成功，请等待送餐员送餐上门。');
		Menus.reset();
		$location.path('/tab/account');
	}
});
