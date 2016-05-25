/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { FooterDirective } from '../app/components/footer/footer.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

angular.module('mapquestBis',
                  ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngRoute', 'ui.bootstrap', 'toastr'])
      .constant('malarkey', malarkey)
      .constant('moment', moment)
      .config(config)
      .config(routerConfig)
      .run(runBlock)
      .service('webDevTec', WebDevTecService)
      .controller('MainController', MainController)
      .directive('footerDirective', FooterDirective)
      .directive('navbarDirective', NavbarDirective)
      .directive('malarkeyDirective', MalarkeyDirective);
