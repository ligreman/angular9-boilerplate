import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { MomentModule } from 'ngx-moment';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpErrorInterceptor } from './core/interceptors/http-error.interceptor';
import { CustomTranslateLoaderService } from './core/utils/custom-translate-loader.service';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { MatPaginatorIntlSpanish } from './shared/spanish-paginator-intl';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
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
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    {
      provide: MatPaginatorIntl,
      useClass: MatPaginatorIntlSpanish
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
