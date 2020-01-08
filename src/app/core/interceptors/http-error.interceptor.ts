import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageService } from '../utils/message.service';
import { Injectable } from '@angular/core';
// import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

/**
 * Intercepta los errores de HTTP
 */
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    /**
     * Inyecto el servicio de mensajes
     */
    // constructor(private message: MessageService, private authService: AuthService, private router: Router) {}
    constructor(private message: MessageService, private router: Router) {}

    /**
     * Definición del interceptor
     * @param request Objeto de la request
     * @param next Callback
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Recojo la cabecera especial Show-General-Error y la elimino de la petición
        const showErrorMessage: boolean = request.headers.get('Show-General-Error') === 'true';

        // Se limpian los params
        const cParams: HttpParams = this.cleanParams(request.params);

        // Se ajusta la petición
        request = request.clone({params: cParams});

        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                let errorKey: string = null;

                // Dependiendo de si el error es de cliente o de servidor
                if (error.error instanceof ErrorEvent) {
                    // client-side or network error
                    errorKey = 'errors.client.generic';
                    console.error(error.error.message);
                } else {
                    // server-side error
                    errorKey = 'errors.http.' + error.status;
                    console.error('Error ' + error.status + ': ' + error.message);

                    // Si da error 401 de Unauthorized elimino la cookie de login
                    if (error.status > 400 || error.status < 500) {
                        // this.authService.deleteLoginCookie();
                        // Navigate to the login page with extras
                        // this.router.navigate(['/login']);
                    }
                }

                // Muestro un toast de error si debo mostrarlo
                if (showErrorMessage) {
                    this.message.showError(errorKey);
                }

                if (errorKey) {
                    error['errorKey'] = errorKey;
                }

                // Lanzo una excepción para que lo capture el endpoint que ha llamado o la consola en última instancia
                return throwError(error);
            })
        );
    }

    /**
     * Limpieza de parámetros vacíos, null o undefined
     *
     * @param params listado de parámetros
     */
    cleanParams(params: HttpParams): HttpParams {
        params.keys().forEach(key => {
            if (!params.get(key) || params.get(key).length === 0) {
                params = params.delete(key);
            }
        });

        return params;
    }
}
