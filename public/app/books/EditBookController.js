app.controller('EditBookController', ['$routeParams', 'books', '$cookies', '$cookieStore', 'dataService', '$log', '$location', 'BooksResource', 'currentUser',
    function($routeParams, books, $cookies, $cookieStore, dataService, $log, $location, BooksResource, currentUser){
        var vm = this;

        // dataService.getBookByID($routeParams.bookID)
        //     .then(getBookSuccess)
        //     .catch(getBookError);

        vm.currentBook = BooksResource.get({book_id: $routeParams.bookID});
        currentUser.lastBookEdited = vm.currentBook;
        $log.log(vm.currentBook);

        function getBookSuccess(book){
            vm.currentBook = book;
            currentUser.lastBookEdited = vm.currentBook;
        }

        function getBookError(reason){
            $log.error(reason);
        }

        vm.saveBook = function(){
            // dataService.updateBook(vm.currentBook)
            //     .then(updateBookSuccess)
            //     .catch(updateBookError);

            dataService.deleteSummaryFromCache();
            vm.currentBook.$update();
            $location.path('/');
        }

        function updateBookSuccess(message){
            $log.info(message);
            $location.path('/');
        }

        function updateBookError(errorMessage){
            $log.error(errorMessage);
        }

        vm.setAsFavorite = function(){

            $cookies.favoriteBook = vm.currentBook.title;
        }

}]);