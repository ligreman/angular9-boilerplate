import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { apiServerInfo } from '../../shared/constants';

// Lo convierto en singleton con provideIn root
@Injectable({
    providedIn: 'root'
})
/**
 * Loader de traducciones de la librería ngxtranslate
 */
export class CustomTranslateLoaderService implements TranslateLoader {
    private urlApi = apiServerInfo.apiBasePath;

    /**
     * Constructor del servicio
     */
    constructor(private httpClient: HttpClient) {}

    /**
     * Obtiene las traducciones
     * @param lang Código de idioma a solicitar
     */
    getTranslation(lang: string): Observable<any> {
        const endpoint: string = this.urlApi + 'langs/' + lang;

        // Pedimos al api las traducciones
        return this.httpClient.get(endpoint, {withCredentials: true})
            .pipe(
                catchError(_ => {
                    // En caso de error (o no estar autenticado) cojo el fichero local de traducciones
                    return this.httpClient.get('./assets/i18n/' + lang + '.json');
                })
            );
    }
}
