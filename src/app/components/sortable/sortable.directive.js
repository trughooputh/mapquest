export function SortableDirective() {
  'ngInject';

  let directive = {
    restrict: 'A',
    templateUrl: 'app/components/sortable/sortable.html',
    scope: {
      sortBy: '=?'
    },
    template: '&nbsp;',
    link: linkFunc,
    transclude: true,
    controller: SortableController,
    controllerAs: 'vm'
  };

  return directive;

  function linkFunc() {
  }

}

class SortableController {
  constructor () {
    'ngInject';

  }

}
