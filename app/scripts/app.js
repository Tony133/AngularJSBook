'use strict';

/**
 * @ngdoc overview
 * @name applicationBookApp
 * @description
 * # applicationBookApp
 *
 * Main module of the application.
 */
angular
  .module('applicationBookApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, bookServiceProvider) {

    bookServiceProvider.setEndpoint('http://127.0.0.1:3000/api/books');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/book', {
        templateUrl: 'views/book.html',
        controller: 'BookCtrl',
        controllerAs: 'book'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
