import { TestBed } from "@angular/core/testing";

import { MessageService } from "./message.service";
import { AngularMaterialModule } from "src/app/shared/angular-material.module";
import { HttpClientModule } from "@angular/common/http";
import { TranslateModule } from "@ngx-translate/core";
import { ToastrModule } from "ngx-toastr";
import { AppRoutingModule } from "src/app/app-routing.module";
import { LoggedComponent } from "src/app/common/layout/logged/logged.component";
import { LoginComponent } from "src/app/routes/login/login.component";
import { ProfileComponent } from "src/app/routes/profile/profile.component";
import { PageNotFoundComponent } from "src/app/routes/page-not-found/page-not-found.component";
import { HeaderComponent } from "src/app/common/header/header.component";
import { AnonymComponent } from "src/app/common/layout/anonym/anonym.component";
import { LogsComponent } from 'src/app/routes/logs/logs.component';

describe("MessageService", () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [
                AngularMaterialModule,
                HttpClientModule,
                AppRoutingModule,
                ToastrModule.forRoot(),
                TranslateModule.forRoot()
            ],
            declarations: [
                LoggedComponent,
                LoginComponent,
                ProfileComponent,
                LogsComponent,
                PageNotFoundComponent,
                HeaderComponent,
                AnonymComponent
            ]
        })
    );

    it("should be created", () => {
        const service: MessageService = TestBed.get(MessageService);
        expect(service).toBeTruthy();
    });
});
