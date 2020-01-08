import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    MatChipsModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
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
