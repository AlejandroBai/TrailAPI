angular.module('starter')

 .controller('signinCtrl',function($scope){

 	$scope.logIn = {
 		user:'',
 		pass:''
 	};

 	$scope.state = {};

 	$scope.loginFun = function(){
 		console.log('Usuario: '+ $scope.logIn.user);
 		console.log('Contraseña: '+ $scope.logIn.pass);
 	};

 	$scope.change = function(param){

 		if(param == 'register'){
 			$scope.state.value = false;
 			$scope.state.ruta = "../../img/ionic.png";
 		}else if(param == 'login'){
 			$scope.state.value = true;
 			$scope.state.ruta = "http://www.carpasikl.com/app/personal.png";
 		}
 	};

 	$scope.change('login');
 });
