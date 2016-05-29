describe('controllers', () => {
  let vm;

  beforeEach(angular.mock.module('mapquestBis'));

  beforeEach(inject(($controller) => {
    vm = $controller('MainController');
  }));

});
