app.factory('wallFactory', ['$location', '$http', function($location, $http) {
    var factory = {};
    factory.currentUser = function(callback) {
        $http({
            url: '/current',
            method: 'GET'
        }).then(function(res) {
            console.log(res.data);
            callback(res.data);
        }, function(res) {
            $location.url('/')
        })
    };
    factory.addPost = function(post) {
        console.log("Printing data in factory", post);
        $http({
            url: '/post',
            method: 'POST',
            data: post
        }).then(function(res) {
            console.log(res);
        }, function(res) {
            console.log(res);
        })
    };
    factory.getPosts = function(callback) {
        $http({
            url: '/post',
            method: 'GET',
        }).then(function(res) {
            callback(res.data);
        }, function(res) {
            console.log(res);
        })
    };
    return factory;
}])
