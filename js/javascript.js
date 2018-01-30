var app= angular.module('chirpApp', []);

app.controller('mainController',function($scope){
	$scope.posts=[];
	$scope.newPost={create_by: '', text:'', create_at: ''}


	$scope.post=function(){

		$scope.newPost.create_at=Date.now();
		$scope.posts.push($scope.newPost);
		$scope.newPost={create_by: '', text:'', create_at: ''}

	}
});
app.controller('authController',function($scope){
$scope.user={username:'', password:''};
$scope.error_message=''

$scope.login=function(){

	$scope.error_message='login request for ' +$scope.user.username;
}
$scope.register=function(){

	$scope.error_message='register request for ' +$scope.user.username;
}



});