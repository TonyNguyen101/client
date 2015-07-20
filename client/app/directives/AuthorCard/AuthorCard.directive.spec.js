'use strict';

describe('Directive: authorCard', function () {

  // load the directive's module and view
  beforeEach(module('civicMakersClientApp'));
  beforeEach(module('app/directives/authorCard/authorCard.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-author-card></-author-card>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the authorCard directive');
  }));
});