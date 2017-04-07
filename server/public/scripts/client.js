var myApp = angular.module("myApp", []);

myApp.controller("OneController", ["$scope", "MovieService", function($scope, MovieService){
  console.log("OneController runs");
  // $scope.movie = MovieService.movie;
  $scope.addNewMovie = MovieService.addNewMovie;

}]);

myApp.controller("TwoController", ["$scope", "MovieService", function($scope, MovieService){
  $scope.movieCollection = MovieService.movieCollection;
  console.log("TwoController", MovieService.movieCollection);

}]);

myApp.factory("MovieService", [function(){

  var movieCollection = [];

  function addNewMovie(object){
    var movie = {
      name: object.name,
      description: object.description,
      director: object.director,
      length: object.length
    };

    movieCollection.push(movie);

    console.log(movieCollection);
  }

    return {
      movieCollection: movieCollection,
      addNewMovie: addNewMovie
    };

}]);
