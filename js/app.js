var app = angular.module('dtkApp',['ui.router'])

app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
		.state('home',{
			url:'/',
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .state('404',{
			url:'/404',
			templateUrl: 'views/404.html'
			// controller: 'InicioController'
        })
        .state('error',{
			templateUrl: 'views/404.html'
			// controller: 'InicioController'
        })

    $urlRouterProvider.otherwise(function($injector, $location){
        $injector.invoke(['$state', function($state) {
            if( $location.$$path == '')
                $state.go('home'); // redirect to /#/
            else
                $state.go('404'); // else go to 404 state
        }]);
    });
});