export function MalarkeyDirective(malarkey) {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
        values: '='
    },
    template: '&nbsp;',
    link: linkFunc,
    controller: MalarkeyController,
    controllerAs: 'vm'
  };

  return directive;

  function linkFunc(scope, el) {
    //let watcher;
    let typist = malarkey(el[0], {
      typeSpeed: 40,
      deleteSpeed: 40,
      pauseDelay: 800,
      loop: true,
      postfix: ' '
    });

    el.addClass('acme-malarkey');

    angular.forEach(scope.values, (value) => {
      typist.type(value).pause().delete();
    });

    scope.$on('$destroy', () => {
      //watcher();
    });
  }

}

class MalarkeyController {
  constructor ($log) {
    'ngInject';

    this.$log = $log;
    this.contributors = [];

    //this.activate(githubContributor);
  }

}
