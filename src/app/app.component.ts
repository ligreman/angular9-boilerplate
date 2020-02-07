import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import * as introJs from 'intro.js/intro.js';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from './core/utils/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  introJS = introJs();
  title = 'miapp';
  myDate = null;


  constructor(private msgService: MessageService, private translate: TranslateService, private cookieService: CookieService) {
    // Idioma fallback si no se encuentra la traducción
    translate.setDefaultLang('es');

    // Idioma a utilizar, cargado de /assets/i18n/[lang].json
    translate.use('es');

    moment.locale('es');

    this.msgService.showWarning('footer.copyright', 'Texto a mostrar');
    this.msgService.showError('clave', 'Texto a mostrar');

    this.myDate = new Date();

    this.introJS.setOptions({
      steps: [
        {
          intro: 'Hello world! patatín patatán. <p>este es un párrafo</p> Y bla bla bla bla'
        },
        {

          element: document.querySelector('#step3'),
          intro: 'This is a tooltip.'
        },
        {
          element: document.querySelectorAll('#step2')[0],
          intro: 'Ok, wasn\'t that fun?',
          position: 'right'
        },
        {
          element: '#step3',
          intro: 'More features, more fun.',
          position: 'left'
        },
        {
          element: '.step4',
          intro: 'Another step.',
          position: 'bottom'
        },
        {
          element: '#step5',
          intro: 'Get it, use it.'
        }
      ]
    });
  }

  ngOnInit(): void {
    this.msgService.showSuccess('clave', 'Texto a mostrar');
    this.msgService.showError('clave', 'Texto a mostrar');

    this.introJS.start();

    console.log('La cookie: ' + this.cookieService.get('miapp-TOKEN'));
  }
}
