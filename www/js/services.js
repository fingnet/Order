angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
}).factory('Areas', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var areas = [
    { 
    	id: 0, name: '城关区',
    	childs:[
    		{ id: 0, name: '科技街' },
    		{ id: 2, name: '金昌路' },
    		{ id: 3, name: '盘旋路' },
    		{ id: 4, name: '西关十字' },
    		{ id: 5, name: '东方红广场' }
    	]
    },
    { id: 1, name: '安宁区',
    	childs:[
    		{ id: 6, name: '西北师范' },
    		{ id: 7, name: '甘肃农大' },
    		{ id: 8, name: '培黎广场' },
    		{ id: 9, name: '费家营' },
    		{ id: 10, name: '十里堡' }
    	]
    },
    { id: 2, name: '七里河区',
    	childs:[
    		{ id: 11, name: '西站' },
    		{ id: 12, name: '小西湖' }
    	]
    },
    { id: 3, name: '西固区' }
  ];
  
  var mansions = [
  	[
  		{ id: 11, name: '广大大厦' },
    	{ id: 12, name: '电信第二枢纽' }
  	]
  ];

  return {
    all: function() {
      return areas;
    },
    get: function(areaId) {
      // Simple index lookup
      return mansions[areaId];
    }
  }
});


