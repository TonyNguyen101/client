'use strict';

describe('Controller: AuthorsCtrl', function () {

  // load the controller's module
  beforeEach(module('civicMakersClientApp'));

  var AuthorsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AuthorsCtrl = $controller('AuthorsCtrl', {
      $scope: scope
    });
  }));

  it('should scope have authors', function () {
    scope.authors = [{name: 'me'}];
    expect(scope.authors.length).toEqual(1);
  });
});
