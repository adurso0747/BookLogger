app.factory('BooksResource', ['$resource', function($resource) {
    return $resource('/api/books/:book_id', {book_id: '@book_id'},
        {
            'update': {method: 'PUT'}
        }
    );
}]);