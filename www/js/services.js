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
}).factory('Foods',function(){

  var cates = [{
          "cate_id": "1",
          "cate_code": "",
          "cate_name": "炒菜",
          "cate_alias": "",
          "icon_sign": "",
          "describe": "",
          "created": "0",
          "updated": "0",
          "sord_no": "50"
      },
      {
          "cate_id": "2",
          "cate_code": null,
          "cate_name": "凉菜",
          "cate_alias": null,
          "icon_sign": null,
          "describe": null,
          "created": null,
          "updated": null,
          "sord_no": null
      },
      {
          "cate_id": "3",
          "cate_code": null,
          "cate_name": "主食",
          "cate_alias": null,
          "icon_sign": null,
          "describe": null,
          "created": null,
          "updated": null,
          "sord_no": null
      }
  ];
 
  var foods = [{
      "food_id": "1",
      "food_code": null,
      "food_name": "酸辣白菜",
      "cate_id": "1",
      "describe": null,
      "status": null,
      "price": "10.00",
      "image": '酸辣白菜.jpg',
      "content": null,
      "stock": "10",
      "created": null,
      "updated": null,
      "sort_no": null
  },
  {
      "food_id": "2",
      "food_code": null,
      "food_name": "松仁苹果炒菠菜",
      "cate_id": "1",
      "describe": null,
      "status": null,
      "price": "12.00",
      "image": '松仁苹果炒菠菜.jpg',
      "content": null,
      "stock": "10",
      "created": null,
      "updated": null,
      "sort_no": null
  },
  {
      "food_id": "3",
      "food_code": null,
      "food_name": "炒凉粉",
      "cate_id": "1",
      "describe": null,
      "status": null,
      "price": "12.00",
      "image": '炒凉粉.jpg',
      "content": null,
      "stock": "10",
      "created": null,
      "updated": null,
      "sort_no": null
  },
  {
      "food_id": "4",
      "food_code": null,
      "food_name": "麻辣孜然小土豆",
      "cate_id": "1",
      "describe": null,
      "status": null,
      "price": "10.00",
      "image": '麻辣孜然小土豆.jpg',
      "content": null,
      "stock": "10",
      "created": null,
      "updated": null,
      "sort_no": null
  },
  {
      "food_id": "5",
      "food_code": null,
      "food_name": "爽口凉拌",
      "cate_id": "2",
      "describe": null,
      "status": null,
      "price": "8.00",
      "image": '爽口凉拌.jpg',
      "content": null,
      "stock": "100",
      "created": null,
      "updated": null,
      "sort_no": null
  },
  {
      "food_id": "6",
      "food_code": null,
      "food_name": "朝鲜辣白菜",
      "cate_id": "2",
      "describe": null,
      "status": null,
      "price": "8.00",
      "image": '朝鲜辣白菜.jpg',
      "content": null,
      "stock": "100",
      "created": null,
      "updated": null,
      "sort_no": null
  },
  {
      "food_id": "7",
      "food_code": null,
      "food_name": "陈皮拌黄瓜",
      "cate_id": "2",
      "describe": null,
      "status": null,
      "price": "8.00",
      "image": '陈皮拌黄瓜.jpg',
      "content": null,
      "stock": "100",
      "created": null,
      "updated": null,
      "sort_no": null
  },
  {
      "food_id": "8",
      "food_code": null,
      "food_name": "鸡蛋烩揪面",
      "cate_id": "3",
      "describe": null,
      "status": null,
      "price": "6.00",
      "image": '鸡蛋烩揪面.jpg',
      "content": null,
      "stock": "100",
      "created": null,
      "updated": null,
      "sort_no": null
  },
  {
      "food_id": "9",
      "food_code": null,
      "food_name": "小窝头",
      "cate_id": "3",
      "describe": null,
      "status": null,
      "price": "2.00",
      "image": '小窝头.jpg',
      "content": null,
      "stock": "100",
      "created": null,
      "updated": null,
      "sort_no": null
  }];

  for(var i =0; i < cates.length; i++){
    cates[i]['foods'] = [];
    for(var j =0; j < foods.length; j++){
      if(foods[j]['cate_id'] == cates[i]['cate_id']){
        cates[i]['foods'].push(foods[j]);
      }
    }
  }

  return {
    all:function(){
      return cates;
    }
  };
}).factory('Menus',function(){
  var menus = {};
  return {
    all:function(){
      return menus;
    },
    get:function(id){
      return menus[id] ? null : menus[id];
    },
    set:function(food, num){
      if(num < 1 && menus[food.food_id]){
        delete menus[food.food_id];
        return;
      }
      menus[food.food_id] = {
        food:food,
        num:num,
        cost:food.price * num
      };
    },
    sum:function(key){
      var count = 0;
      for(var i in menus){
        count += menus[i][key];
      }
      return count;
    },
    reset:function(){
      menus = {};
    }
  }
});


