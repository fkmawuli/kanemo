angular
    .module("kanemo")
    .factory("kanemoFactory",
        function($http){

            function getBooks(){
                //return $http.get('https://kanemo-40b0a.firebaseio.com/');
                return $http.get('data/books.json');
                //return $http.get('https://www.behance.net/v2/projects/4889175?api_key=N5hnF8ppaMaP5kt6FtqnKnvAIZByPgKI');
            }
            return{
                getBooks:getBooks
            }

});
