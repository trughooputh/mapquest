export function MapDirective($log) {
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
    link: function () {
        console.log('map directive');
    }
  };

  return directive;
}

class MapController {
  constructor (NgMap) {
    'ngInject';

    //NgMap.getMap();
    var vm = this;

    vm.positions =[
     {pos:[40.71, -74.21]},
     {pos:[40.72, -74.20]},
     {pos:[40.73, -74.19]},
     {pos:[40.74, -74.18]},
     {pos:[40.75, -74.17]},
     {pos:[40.76, -74.16]},
     {pos:[40.77, -74.15]}
   ];



  }
}
