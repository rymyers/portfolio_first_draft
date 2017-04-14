app.controller('wallController', ['$scope', '$location', 'wallFactory', function($scope, $location, wallFactory) {
    function currentUser() {
        wallFactory.currentUser(function(data) {
            $scope.user = data;
        });
    }
    function getPosts(){
        wallFactory.getPosts(function(data){
            $scope.post = data;
        })
    }
    getPosts();
    currentUser();
    $scope.addPost = function(post){
        console.log(post);
        wallFactory.addPost(post);
    }
}])
