/**
 * @todo Complete the test
 * This example is not perfect.
 */

describe('directive footer', function() {
  let vm;
  let element;

  beforeEach(angular.mock.module('mapquest'));

  beforeEach(inject(($compile, $rootScope) => {

    element = angular.element(`
      <footer-directive></footer-directive>
    `);

    $compile(element)($rootScope.$new());
    $rootScope.$digest();
    vm = element.isolateScope().vm;
  }));

});
