'use strict';

/**
 * @ngdoc service
 * @name applicationBookApp.bookService
 * @description
 * # bookService
 * Provider in the applicationBookApp.
 */
angular.module('applicationBookApp')
  .provider('bookService', function () {
  // AngularJS will instantiate a singleton by calling "new" on this function

	this.endPoint = '';

	this.setEndpoint = function(endPoint) {
		this.endPoint = endPoint;
	};

	this.getEndpoint = function() {
		return this.endPoint;
	};

	this.$get = function($resource) {
			return $resource(
			    this.getEndpoint() + '/:id', {
				    id : '@id'
			    }, {
            "get" : {
              method : 'GET',
              params : {},
              isArray : true
            },
            "create" : {
              method : 'POST',
              params : {},
              isArray : false
            },
            "update" : {
              method : 'PUT',
              params : {},
              isArray : false
            },
            "delete" : {
              method : 'DELETE',
              params : {},
              isArray : false
            }
			    }
			);
    };
});
