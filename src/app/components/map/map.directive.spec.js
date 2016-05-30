/**
 * @todo Complete the test
 * This example is not perfect.
 */

describe('directive map', function() {
  let vm;
  let element;

  beforeEach(angular.mock.module('mapquest'));

  beforeEach(inject(($compile, $rootScope) => {

    element = angular.element(`
      <map-directive data=[]></map-directive>
    `);

    $compile(element)($rootScope.$new());
    $rootScope.$digest();
    vm = element.isolateScope().vm;
  }));

});
