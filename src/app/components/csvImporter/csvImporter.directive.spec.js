/**
 * @todo Complete the test
 * This example is not perfect.
 */

describe('directive csvImporter', function() {
  let vm;
  let element;

  beforeEach(angular.mock.module('mapquest'));

  beforeEach(inject(($compile, $rootScope) => {

    element = angular.element(`
      <csv-importer></csv-importer>
    `);

    $compile(element)($rootScope.$new());
    $rootScope.$digest();
    vm = element.isolateScope().vm;
  }));

});
