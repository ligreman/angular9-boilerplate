import {
    HTTP_INTERCEPTORS,
    HttpClient,
    HttpClientModule
} from '@angular/common/http';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { MomentModule } from 'ngx-moment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpErrorInterceptor } from './core/interceptors/http-error.interceptor';
import { CustomTranslateLoaderService } from './core/utils/custom-translate-loader.service';
import { SharedModule } from './shared/shared.module';
import { matPaginatorIntlSpanish } from './shared/spanish-paginator-intl';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ToastrModule.forRoot({
            maxOpened: 5,
            autoDismiss: true,
            progressBar: true
        }),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useClass: CustomTranslateLoaderService,
                deps: [HttpClient]
            }
        }),
        MomentModule.forRoot({
            relativeTimeThresholdOptions: {
                // 's': 59,
                // 'm': 59
            }
        })
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        },
        {
            provide: MatPaginatorIntl,
            useClass: matPaginatorIntlSpanish
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
