/* global malarkey:false, ngMap: false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { TableDirective } from '../app/components/table/table.directive';
import { MapDirective } from '../app/components/map/map.directive';
import { FooterDirective } from '../app/components/footer/footer.directive';
import { CsvImporterDirective } from '../app/components/csvImporter/csvImporter.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

angular
  .module('mapquest',
    ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngRoute', 'ui.bootstrap', 'ngMap'])
      .constant('malarkey', malarkey)
      .config(config)
      .config(routerConfig)
      .run(runBlock)
      .controller('MainController', MainController)
      .directive('navbarDirective', NavbarDirective)
      .directive('tableDirective', TableDirective)
      .directive('mapDirective', MapDirective)
      .directive('csvImporterDirective', CsvImporterDirective)
      .directive('malarkeyDirective', MalarkeyDirective)
      .directive('footerDirective', FooterDirective);
