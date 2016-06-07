export function CsvImporterDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/csvImporter/csvImporter.html',
    scope: {},
    controller: CsvImporterController,
    controllerAs: 'vm',
    bindToController: true,
    link: function () {
    }
  };

  return directive;
}

class CsvImporterController {
  constructor ($window) {
    'ngInject';

    var vm = this;

    vm.csvData = '';
    vm.startups = [];

    this.importData = function(data) {
      if (data) {
        vm.csvData = data;
        vm.startups = []
        this.parseCsvData();

        // Go to map
        let mapElement = angular.element(document.querySelector('#map-quest-map'));
        $window.scroll(0, mapElement[0].offsetTop);
      }
    }

    this.parseCsvData = function() {
      var csvRows    = vm.csvData.split(/\n/); // Split by csvRows
      var csvHeaders = csvRows.shift().split(','); // Header row

      var rowObject = {};

      // Each rows
      for(var rowIndex in csvRows) {

        let columns  = csvRows[rowIndex].split(',');

        for(var headerIndex = 0; headerIndex < csvHeaders.length; ++headerIndex){
          let headerlabel = csvHeaders[headerIndex].trim().replace(/\s+/g, '_').toLowerCase(); // Cleaning label
          rowObject[headerlabel] = columns[headerIndex].trim();
        }
        rowObject['on_map'] = true;
        //rowObject['position'] = [rowObject['garage_latitude'], rowObject['garage_longitude']];

        vm.startups.push(rowObject);

        rowObject = {};

      }

    }

  }
}
