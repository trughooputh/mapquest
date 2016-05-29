export function TableDirective($log) {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/table/table.html',
    scope: {
      data: '='
    },
    controller: TableController,
    controllerAs: 'vm',
    bindToController: true,
    link: function (scope, element, attrs) {
    }
  };

  return directive;
}

class TableController {
  constructor () {
    'ngInject';


  }
}
