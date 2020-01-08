import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { MessageService } from './core/utils/message.service';

@Component({
    selector: 'abc-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'miapp';
    myDate = null;

    constructor(private msgService: MessageService, private translate: TranslateService) {
        // Idioma fallback si no se encuentra la traducción
        translate.setDefaultLang('es');

        // Idioma a utilizar, cargado de /assets/i18n/[lang].json
        translate.use('es');

        moment.locale('es');

        this.msgService.showWarning('footer.copyright', 'Texto a mostrar');
        this.msgService.showError('clave', 'Texto a mostrar');

        this.myDate = new Date();
    }

    ngOnInit(): void {
        this.msgService.showSuccess('clave', 'Texto a mostrar');
        this.msgService.showError('clave', 'Texto a mostrar');
    }
}
