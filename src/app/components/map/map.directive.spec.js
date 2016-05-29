/**
 * @todo Complete the test
 * This example is not perfect.
 */

describe('directive map', function() {
  let vm;
  let element;

  beforeEach(angular.mock.module('mapquestBis'));

  beforeEach(inject(($compile, $rootScope) => {

    element = angular.element(`
      <map-directive></map-directive>
    `);

    $compile(element)($rootScope.$new());
    $rootScope.$digest();
    vm = element.isolateScope().vm;
  }));

});
