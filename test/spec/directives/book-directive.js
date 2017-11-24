'use strict';

describe('Directive: bookDirective', function () {

  // load the directive's module
  beforeEach(module('applicationBookApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<book-directive></book-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the bookDirective directive');
  }));
});
