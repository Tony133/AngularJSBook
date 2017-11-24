'use strict';

/**
 * @ngdoc service
 * @name applicationBookApp.bookServiceLoader
 * @description
 * # bookServiceLoader
 * Factory in the applicationBookApp.
 */
angular.module('applicationBookApp')
  .factory('bookServiceLoader', function (bookService, $q) {
    return function(params) {
			var delay = $q.defer();
			bookService.get({
			    id : params.id
			}, function(data) {
			    delay.resolve(data);
			}, function() {
			    delay.reject('Unable to fetch data');
			});
			return delay.promise;
		};

  });
