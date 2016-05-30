describe('controllers', () => {
  let vm;

  beforeEach(angular.mock.module('mapquest'));

  beforeEach(inject(($controller) => {
    vm = $controller('MainController');
  }));

});
