export function TableDirective() {
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
    link: function () {

    }
  };

  return directive;
}

class TableController {
  constructor () {
    'ngInject';
    this.sort = 'id';
  }

  setSort (sort) {
    if(this.sort == sort) {
      this.sort = '-' + sort;
    }
    else {
      this.sort = sort;
    }
  }

  checkClass(sort) {
    if(this.sort == sort) {
      return 'asc';
    }
    else if (this.sort.indexOf(sort) > 0 ) {
      return 'desc';
    }
    return '';
  }
}
