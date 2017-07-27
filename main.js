			//$('#user-email').on('input',function() {
       // var email = $('#user-email').val()
       // var message = 'Welcome Back, ' + email;
       // $('.welcome-message').text(message);
   // });

   var foodieApp = angular.module('foodieApp',['ngRoute']);
   foodieApp.config(function ($routeProvider) {
 	$routeProvider
 	.when('/',{
 		templateUrl: 'pages/login.html',
 		controller: 'loginController'
 	})
 	.when('/home',{
 		templateUrl: 'pages/main.html',
 		controller: 'mainController'
 	})
  .when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
 })

   foodieApp.controller('mainController',function($scope) {
	$scope.restaurants = [
	{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
  id: 1,
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
	name: 'Oozo',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.6',
	cuisines: 'Modern Indian',
	cost: '2200',
  id: 2,
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://images.pexels.com/photos/496970/pexels-photo-496970.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
},
{
	name: 'Bombay AddA',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
  id: 3,
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
},
{
	name: 'Fusion Fantasea',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.4',
	cuisines: 'Modern Indian',
	cost: '2200',
   id: 4,
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://images.pexels.com/photos/511679/pexels-photo-511679.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
},
{
	name: 'Joeys Pizza',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '3.9',
	cuisines: 'Modern Indian',
	cost: '2200',
  id: 5,
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://images.pexels.com/photos/208537/pexels-photo-208537.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
},
{
	name: 'Happy Hakka',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
  id: 6,
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://images.pexels.com/photos/22420/pexels-photo.jpg?w=940&h=650&auto=compress&cs=tinysrgb'
},
{
	name: 'Fort 001',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '3.9',
	cuisines: 'Modern Indian',
	cost: '2200',
  id: 7,
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://images.pexels.com/photos/357809/pexels-photo-357809.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
},
{
	name: 'Burma Burma',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.7',
	cuisines: 'Modern Indian',
	cost: '2200',
  id: 8,
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://images.pexels.com/photos/464229/food-noodles-soup-pho-464229.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
}
]
})

  foodieApp.controller('loginController',function($scope,$location) {
  	$scope.goToHome = function() {
  		// console.log('Do Something')
  		$location.url('home')
  	}
  })

  foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
    $scope.ingredients = [];
  	$scope.restaurantId = $routeParams.id;
  	var restaurants = [
  	{
  	name: 'Farzi Cafe',
  	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  	location: 'Connaught Place',
  	category: 'Casual Dining, Bar',
  	vote: '4.2',
  	cuisines: 'Modern Indian',
  	cost: '2200',
    id: 1,
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
  },
  {
  	name: 'Oozo',
  	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  	location: 'Connaught Place',
  	category: 'Casual Dining, Bar',
  	vote: '4.6',
  	cuisines: 'Modern Indian',
  	cost: '2200',
    id: 2,
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'https://images.pexels.com/photos/496970/pexels-photo-496970.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
  },
  {
  	name: 'Bombay AddA',
  	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  	location: 'Connaught Place',
  	category: 'Casual Dining, Bar',
  	vote: '4.2',
  	cuisines: 'Modern Indian',
  	cost: '2200',
    id: 3,
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
  },
  {
  	name: 'Fusion Fantasea',
  	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  	location: 'Connaught Place',
  	category: 'Casual Dining, Bar',
  	vote: '4.4',
  	cuisines: 'Modern Indian',
  	cost: '2200',
     id: 4,
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'https://images.pexels.com/photos/511679/pexels-photo-511679.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
  },
  {
  	name: 'Joeys Pizza',
  	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  	location: 'Connaught Place',
  	category: 'Casual Dining, Bar',
  	vote: '3.9',
  	cuisines: 'Modern Indian',
  	cost: '2200',
    id: 5,
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'https://images.pexels.com/photos/208537/pexels-photo-208537.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
  },
  {
  	name: 'Happy Hakka',
  	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  	location: 'Connaught Place',
  	category: 'Casual Dining, Bar',
  	vote: '4.2',
  	cuisines: 'Modern Indian',
  	cost: '2200',
    bestDish: {
          	name: 'Corn Pizza',
          	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
          },
    id: 6,
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'https://images.pexels.com/photos/22420/pexels-photo.jpg?w=940&h=650&auto=compress&cs=tinysrgb'
  },
  {
  	name: 'Fort 001',
  	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  	location: 'Connaught Place',
  	category: 'Casual Dining, Bar',
  	vote: '3.9',
  	cuisines: 'Modern Indian',
  	cost: '2200',
    id: 7,
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'https://images.pexels.com/photos/357809/pexels-photo-357809.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
  },
  {
  	name: 'Burma Burma',
  	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  	location: 'Connaught Place',
  	category: 'Casual Dining, Bar',
  	vote: '4.7',
  	cuisines: 'Modern Indian',
  	cost: '2200',
    id: 8,
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'https://images.pexels.com/photos/464229/food-noodles-soup-pho-464229.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
  }
  ]
  	$scope.restaurant = restaurants[$routeParams.id - 1];
    console.log($scope.restaurant);
    $scope.getIngredients = function(url)  {
	var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
	$http({
		'method': 'POST',
		'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
		'headers': {
			'Authorization': 'Key e3894b0b02784675bd3f9c68ff5cb799',
			'Content-Type': 'application/json'
		},
		'data': data
	}).then(function (response) {
    var ingredients = response.data.outputs[0].data.concepts;
    	for (var i =0;i < ingredients.length;i++) {
    	$scope.ingredients.push(ingredients[i].name);
    $scope.probabilityvalue.push(ingredients[i].value);
    	}
        }, function (xhr) {
        	console.log(xhr);
        })
	}
  $scope.ingredients = [];
  		$scope.probabilityvalue=[];

  		$scope.checkVegorNonVeg = function() {
  			var flag_quit =0;
  			ing_list = $scope.ingredients; //hard copy
  			prob_value= $scope.probabilityvalue;
  			var elements = prob_value.filter(function(a){return a > 0.75;});
  			ing_list.splice(elements.length,20)
  			var nonveg = ["egg","meat","bacon","chicken","sushi","pork","steak"];

  			for(j=0;j<ing_list.length;j++){
  				for(i=0;i<nonveg.length;i++){
  					if(ing_list[j] == nonveg[i]){
  						flag_quit=1;
  						break;
  					}
  				}
  			if(flag_quit==1){
  				$(".rest-extra").css("background-color", "red");
  				break;
  			}

  		}
  		if(flag_quit==0){$(".rest-extra").css("background-color", "green");}
  	}
});
