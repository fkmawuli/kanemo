angular
    .module("kanemo")
    .controller("kanemoController",
    function($scope,kanemoFactory){

        $scope.books;
        var bookHolder;
        kanemoFactory.getBooks().success(
            function(data){
                $scope.books = data;
                bookHolder = data;
              $scope.totalItems = bookHolder.length;
            }).error(
                function(error){
                    console.log(error)

            });

 //Configuring the routes of the Page
    kanemo.config(['$routeProvider',function ($routeProvider){

        $routeProvider
            .when('/main',{
                templateUrl : 'pages/main.html',
                controller : 'kanemoController'
        })
            .when('/about',{
            templateUrl: 'pages/about.html',
             controller: 'aboutController'
            })
            .when('/contact',{
            templateUrl : 'pages/main.html',
             controller : 'kanemoController'
            })
             .when('/services',{
              templateUrl: 'pages/services.html',
              controller: 'servicesController'
                 })
                 .otherwise({
                   redirectTo: '/main'
                 })
        //$locationProvider.html5Mode(true);
        }]);

//create the controller and inject Angular's $scope
  $scope.maxSize = 6;
  $scope.currentPage = 1;
  $scope.nextPage = 0;

  $scope.pageChange = function(currentPage){
    $scope.nextPage = ($scope.maxSize * currentPage) - $scope.maxSize;
    $scope.books = bookHolder.slice($scope.nextPage, ($scope.nextPage + 6))
  };
        //helps in the selection process of where the tooltip should be displayed
        $scope.placement = {
            options: [
                'top',
                'top-left',
                'top-right',
                'bottom',
                'bottom-left',
                'bottom-right',
                'left',
                'left-top',
                'left-bottom',
                'right',
                'right-top',
                'right-bottom'
            ],
            selected: 'top-left'
        };

});
