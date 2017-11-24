'use strict';

describe('Service: bookServiceLoader', function () {

  // load the service's module
  beforeEach(module('applicationBookApp'));

  // instantiate service
  var bookServiceLoader;
  beforeEach(inject(function (_bookServiceLoader_) {
    bookServiceLoader = _bookServiceLoader_;
  }));

  it('should do something', function () {
    expect(!!bookServiceLoader).toBe(true);
  });

});
