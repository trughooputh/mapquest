export function CsvImporterDirective($log) {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/csvImporter/csvImporter.html',
    scope: {},
    controller: CsvImporterController,
    controllerAs: 'vm',
    bindToController: true,
    link: function (scope, element, attrs) {
      //console.log(attrs);
      scope.data = 'testssss';

      element.val(scope.data);

    }
  };

  return directive;
}

class CsvImporterController {
  constructor () {
    'ngInject';

    this.importData = function() {

    }

  }
}
