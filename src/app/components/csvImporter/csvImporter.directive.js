export function CsvImporterDirective($log) {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/csvImporter/csvImporter.html',
    scope: {},
    controller: CsvImporterController,
    controllerAs: 'vm',
    bindToController: true,
    link: function (scope, element, attrs) {
    }
  };

  return directive;
}

class CsvImporterController {
  constructor ($log) {
    'ngInject';

    var vm = this;

    vm.csvData = '';

    vm.startups = [];

    this.importData = function(data) {
      if (data) {
        vm.csvData = data;
        this.parseCsvData();
      }
    }

    this.parseCsvData = function() {
      var csvRows    = vm.csvData.split(/\n/); // Split by csvRows
      var csvHeaders = csvRows.shift().split(',');

      var rowObject = {};

      for(var rowIndex in csvRows) {

        let columns  = csvRows[rowIndex].split(',');

        for(var headerIndex = 0; headerIndex < csvHeaders.length; ++headerIndex){
          rowObject[csvHeaders[headerIndex].trim()] = columns[headerIndex].trim();
        }

        console.log(rowObject);

        vm.startups.push(rowObject);

        rowObject = {};

      }


      console.log(vm.startups);


    }

  }
}
