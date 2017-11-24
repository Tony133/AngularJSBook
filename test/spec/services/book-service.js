'use strict';

describe('Service: bookService', function () {

  // instantiate service
  var bookService,
    init = function () {
      inject(function (_bookService_) {
        bookService = _bookService_;
      });
    };

  // load the service's module
  beforeEach(module('applicationBookApp'));

  it('should do something', function () {
    init();

    expect(!!bookService).toBe(true);
  });

  it('should be configurable', function () {
    module(function (bookServiceProvider) {
      bookServiceProvider.setSalutation('Lorem ipsum');
    });

    init();

    expect(bookService.greet()).toEqual('Lorem ipsum');
  });

});
