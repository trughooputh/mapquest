export class CsvImporterService {
  constructor ($log, $http) {
    'ngInject';

    this.$log = $log;
    this.$http = $http;
    this.file = 'assets/data/sample.csv';
  }

  getCSVfile(limit=30) {

    var Url   = "src/utils/some.csv";
    var Items = $http.get(this.file)
                  .then((response) => {
                    console.log(response);
                     return response.data;
                  })
                  .catch((error) => {
                    this.$log.error('XHR Failed for getCSV file.\n' + angular.toJson(error.data, true));
                  });
    return Items;


    // return this.$http.get(this.apiHost + '/contributors?per_page=' + limit)
    //   .then((response) => {
    //     return response.data;
    //   })
    //   .catch((error) => {
    //     this.$log.error('XHR Failed for getCSV file.\n' + angular.toJson(error.data, true));
    //   });



  }
}
