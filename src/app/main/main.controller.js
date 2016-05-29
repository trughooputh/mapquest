export class MainController {
  constructor ($timeout, webDevTec, toastr, NgMap) {
    'ngInject';

    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1463823215018;
    this.toastr = toastr;

    //this.activate($timeout, webDevTec);
  }

  activate() {
  }

  getWebDevTec(webDevTec) {
    this.awesomeThings = webDevTec.getTec();

    angular.forEach(this.awesomeThings, (awesomeThing) => {
      awesomeThing.rank = Math.random();
    });
  }

  showToastr() {
    this.toastr.success('<b>Hello there !</b>');
    this.classAnimation = 'rubberBand';
  }
}
