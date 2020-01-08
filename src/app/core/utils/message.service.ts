import { Injectable, OnDestroy } from '@angular/core';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@AutoUnsubscribe()
@Injectable({
    providedIn: 'root'
})

/**
 * Clase para gestionar los mensajes toast/snackbar
 */
export class MessageService implements OnDestroy {
    constructor(private translate: TranslateService, private toastr: ToastrService) {}

    ngOnDestroy(): void {
    }


    /**
     * Toast de exito
     *
     * @param key Clave i18n del mensaje a mostrar
     * @param extraInfo Cadena de información extra para mostrar en el mensaje de exito
     */
    public showSuccess(key: string, extraInfo: string = '') {
        // Muestro el toast
        this.translate.get(key, {extra: extraInfo}).subscribe(value => {
            this.toastr.success(value, null, {
                timeOut: 5000
            });
        });
    }

    /**
     * Toast de error
     *
     * @param key Clave i18n del mensaje a mostrar
     * @param extraInfo Cadena de información extra para mostrar en el error
     */
    public showError(key: string, extraInfo: string = '') {
        // Muestro el toast
        this.translate.get(key, {extra: extraInfo}).subscribe(value => {
            this.toastr.error(value, null, {
                timeOut: 5000
            });
        });
    }

    /**
     * Toast de warning
     *
     * @param key Clave i18n del mensaje a mostrar
     * @param extraInfo Cadena de información extra para mostrar en el warning
     */
    public showWarning(key: string, extraInfo: string = '') {
        // Muestro el toast
        this.translate.get(key, {extra: extraInfo}).subscribe(value => {
            this.toastr.warning(value, null, {
                timeOut: 5000
            });
        });
    }
}
