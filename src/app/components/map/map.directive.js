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
        let watcher;

        watcher = scope.$watch('vm.data', () => {
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

    var vm = this;

    NgMap.getMap().then(function(map) {
      //console.log('map', map);
      vm.map = map;
    });

    vm.apikey = 'AIzaSyDAd2qIO-6YvsXdouuxfhfwHDfrzErA0yU'; // need to be a const in config
    vm.positions = [];

  }

  getMarkers () {

    let startups = this.data;

    if (startups.length > 0) {

        for(var i = 0; i < startups.length; ++i) {
          let lat = startups[i]["Garage Latitude"];
          let lng = startups[i]["Garage Longitude"];

          let pos = {
            pos: [lat, lng],
            data: startups[i]
          };

          this.positions.push(pos);
          pos = [];
        }
     }
  }
  showDetail (e, startup) {
    //var vm = this;

    this.startup = startup;

    this.map.showInfoWindow('my-iw', this.startup);
  };
}
