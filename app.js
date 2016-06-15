angular.module('mySite', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'routes/homeTmpl.html'
            })
            .state('resume', {
                url: '/resume',
                templateUrl: 'routes/resumeTmpl.html'
            })
            .state('bandcamp', {
                url: '/bandcamp',
                templateUrl: 'routes/bandcampTmpl.html'
            })
            .state('email', {
                url: '/email',
                templateUrl: 'routes/emailTmpl.html'
            });

        $urlRouterProvider
            .otherwise('/');
    });
