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

  function linkFunc(scope, el) {
    console.log('sortable directive');
    //el[0].addClass('sortable');
  }

}

class SortableController {
  constructor () {
    'ngInject';
    console.log('SortableController');
  }

}
