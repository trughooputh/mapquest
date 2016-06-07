export function MapDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/map/map.html',
    scope: {
      data: '='
    },
    controller: MapController,
    controllerAs: 'vm',
    bindToController: true,
    link: function (scope, el, attr, vm) {

        let watcher = scope.$watch('vm.data', () => {
          vm.getMarkers();
        });

        scope.$on('$destroy', () => {
          watcher();
        });
    }
  };

  return directive;
}

class MapController {
  constructor (NgMap) {
    'ngInject';

    this.vm = this;

    var that = this;

    NgMap.getMap().then(function(map) {
      that.vm.map = map;
    });

    this.vm.apikey = 'AIzaSyDAd2qIO-6YvsXdouuxfhfwHDfrzErA0yU'; // need to be a const in config

  }

  getMarkers () {

  }

  showDetail (e, startup) {
    console.log(this);
    console.log(startup);

    startup.position = [startup['garage_latitude'], startup['garage_longitude'] ]

    this.map.startup = startup;

    //this.startup = startup;

    this.map.showInfoWindow('foo-iw', startup.id);
  }

}
