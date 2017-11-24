'use strict';

/**
 * @ngdoc directive
 * @name applicationBookApp.directive:bookDirective
 * @description
 * # bookDirective
 */
angular.module('applicationBookApp')
  .directive('bookDirective', function (bookService, bookServiceLoader) {
    return {
      template: '' +
        '<form>'+
            '<div class="form-group">'+
				    	'<label for="title">Title</label>'+
				    	'<input type="text" name="title" ng-model="newBook.title" class="form-control"  id="title" placeholder="Insert title">'+
				  	'</div>'+
				  	'<div class="form-group">'+
				    	'<label for="description">Price</label>'+
				    	'<input type="text" name="price" ng-model="newBook.price" class="form-control" id="price" placeholder="Insert price">'+
				  	'</div>'+
            '<button type="submit" ng-click="addBook(newBook)" class="btn btn-primary"><span class="glyphicon glyphicon-pencil"></span> Insert</button>'+
				'</form>'+
	      '<hr>'+
        '<div class="table-responsive" ng-controller="BookCtrl">' +
					'<table class="table">' +
						'<thead>' +
							'<tr>' +
								'<th>Id</th>' +
								'<th>Title</th>' +
								'<th>Price</th>' +
								'<th>Action</th>' +
							'</tr>' +
						'</thead>' +
						'<tbody>' +
							'<tr ng-repeat="value in books" >' +
								'<td>{{ value.id }}</td>' +
								'<td>' +
				    				'<div ng-hide="editingBooks[value.id]">{{value.title}}</div>' +
                        '<div ng-show="editingBooks[value.id]">'+
                      	'<input class="form-control" type="text" ng-model="value.title" value="{{value.title}}">'+
                    '</div>'+
								'</td>' +
								'<td>' +
				    				'<div ng-hide="editingBooks[value.id]">{{value.price}}</div>' +
                        '<div ng-show="editingBooks[value.id]">'+
                        '<input class="form-control" type="text" ng-model="value.price" value="{{value.price}}">'+
                    '</div>'+
								'</td>' +
                '<td>' +
						  	    '<button class="btn btn-warning" ng-hide="editingBooks[value._id]" ng-click="modifyBook(value)"><span class="glyphicon glyphicon-pencil"></span> Edit</button>'+
                    '<button class="btn btn-primary" ng-show="editingBooks[value._id]" ng-click="updateBook($index)"><span class="glyphicon glyphicon-ok"></span> Update</button>'+
                '</td>' +
                '<td>' +
                       '<button class="btn btn-danger" ng-click="removeBooks($index)"><span class="glyphicon glyphicon-remove"></span> Delete</button>' +
                '</td>' +
							'</tr>'+
						'</tbody>'+
					'</table>'+
				'</div>'
      ,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

          scope.books = [];

          // GETLIST
          scope.loadBooks = function () {
            var loader = new bookServiceLoader({});
            loader.then(function(resource, data) {
              console.log('Books', resource);

              scope.books = resource;

              console.log("log:", scope.books);
            }, function(e) {
                  alert("Error " + JSON.stringify(e, null, '    '));
            });
          };

          scope.loadBooks();

          //INSERT
          scope.newBook = {};

          scope.addBook = function (book) {
              console.log(book);
              bookService.create(book, function(resource) {
                console.log('Book create successfuly', resource);

                scope.loadBooks();
              }, function(e) {
                console.log('error', e);
              })
              console.log(book);
          };

          //MODIFY
          scope.editingBooks = []; //object empty

          for (var i = 0, length = scope.books.length; i < length; i++) {
              scope.editingBooks[scope.books[i].id] = false;
          }

          scope.modifyBook = function(book) {
              scope.editingBooks[book.id] = true;
          };

          //UPDATE
          scope.updateBook = function(index) {
              var book = scope.books[index];
              bookService.update(book, function(resource) {
                console.log('Book update successfuly!', resource);
                //scope.editingBooks[book.id] = false;

                scope.loadBooks();
              }, function(e) {
                console.log('Error book update', e);
              })
              console.log(book);
          };

          //DELETE
          scope.removeBook = function (index) {
              var book = scope.books[index];
              bookService.delete(book, function(resource) {
                console.log('Book deleted successfuly!', resource);

                scope.loadBooks();
              }, function(e) {
                console.log('Error book delete', e);
              })
          };
      }
    };
  });
