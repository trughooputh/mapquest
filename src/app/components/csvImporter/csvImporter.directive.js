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
  constructor () {
    'ngInject';

    var vm = this;

    vm.csvData = '';
    vm.startups = [];

    this.importData = function(data) {
      if (data) {
        vm.startups = []
        vm.csvData = data;
        this.parseCsvData();
      }
    }

    this.parseCsvData = function() {
      var csvRows    = vm.csvData.split(/\n/); // Split by csvRows
      var csvHeaders = csvRows.shift().split(',');

      var rowObject = {};

      // Each rows
      for(var rowIndex in csvRows) {

        let columns  = csvRows[rowIndex].split(',');

        for(var headerIndex = 0; headerIndex < csvHeaders.length; ++headerIndex){
          rowObject[csvHeaders[headerIndex].trim()] = columns[headerIndex].trim();
        }

        vm.startups.push(rowObject);

        rowObject = {};

      }

    }

  }
}
