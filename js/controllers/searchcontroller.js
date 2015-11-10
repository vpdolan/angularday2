let SearchController = function ($scope) {

  $scope.title = 'Unsplash Photos';

  $scope.getPhoto = (query) => {

    $scope.photoUrl = 'https://source.unsplash.com/all/?' + query;

    $scope.query = '';

  };  

};

SearchController.$inject = ['$scope'];

export default SearchController;