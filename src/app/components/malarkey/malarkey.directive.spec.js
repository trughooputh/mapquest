/**
 * @todo Complete the test
 * This example is not perfect.
 * The `link` function is not tested.
 * (malarkey usage, addClass, $watch, $destroy)
 */
describe('directive malarkey', function() {
  let vm;
  let element;

  beforeEach(angular.mock.module('mapquest'));

  beforeEach(inject(($compile, $rootScope) => {

    element = angular.element(`
      <malarkey-directive values="['Poney', 'Monkey']"></malarkey-directive>
    `);

    $compile(element)($rootScope.$new());
    $rootScope.$digest();
    vm = element.isolateScope().vm;
  }));

});
