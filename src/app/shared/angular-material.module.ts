import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SatPopoverModule } from '@ncstate/sat-popover';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

/**
 * Módulo que aglutina los módulos de Material/UI para su importación en otros módulos de una vez
 */
@NgModule({
    declarations: [],
    imports: [
        MatButtonModule,
        MatButtonToggleModule,
        MatBadgeModule,
        MatToolbarModule,
        MatIconModule,
        MatCheckboxModule,
        MatRadioModule,
        MatFormFieldModule,
        MatInputModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatListModule,
        MatGridListModule,
        MatTableModule,
        MatTooltipModule,
        MatPaginatorModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatInputModule,
        MatSnackBarModule,
        MatChipsModule,
        NgxMaterialTimepickerModule,
        FormsModule,
        // ReactiveFormsModule,
        FlexLayoutModule,
        SatPopoverModule
    ],
    exports: [
        MatButtonModule,
        MatButtonToggleModule,
        MatBadgeModule,
        MatToolbarModule,
        MatIconModule,
        MatCheckboxModule,
        MatRadioModule,
        MatFormFieldModule,
        MatInputModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatListModule,
        MatGridListModule,
        MatTableModule,
        MatTooltipModule,
        MatPaginatorModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatInputModule,
        MatSnackBarModule,
        MatChipsModule,
        NgxMaterialTimepickerModule,
        FormsModule,
        // ReactiveFormsModule,
        FlexLayoutModule,
        SatPopoverModule
    ]
})
export class AngularMaterialModule {
}
