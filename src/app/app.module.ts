import { CommonModule } from '@angular/common';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule
} from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CustomTranslateLoaderService } from './core/custom-translate-loader.service';

// import { AngularMaterialModule } from './shared/angular-material.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    // AngularMaterialModule,
    BrowserAnimationsModule
    // HttpClientModule
    /*ToastrModule.forRoot({
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
    })*/
  ],
  providers: [
    /*{
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
