app.factory('bookLoggerInterceptor', ['$q', '$log', function($q, $log){
    return{
        request: requestInterceptor,
        responseError: responseErrorInterceptor
    }

    function requestInterceptor(config){
        $log.debug('HTTP ' + config.method + ' request - ' + config.url);
        return config;
    }

    function responseErrorInterceptor(response){
        $log.debug('HTTP ' + response.config.method + ' response error - ' + response.config );
        return $q.reject(response);
    }
}])