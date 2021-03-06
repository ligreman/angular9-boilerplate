import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AngularMaterialModule } from './angular-material.module';

/**
 * Módulo que agrupa las cargas de módulos compartidos para su importación en otros módulos de una vez
 */
@NgModule({
    declarations: [],
    imports: [
        AngularMaterialModule,
        CommonModule
    ],
    exports: [
        AngularMaterialModule,
        CommonModule,
        TranslateModule
    ]
})
export class SharedModule {
}
