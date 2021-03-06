import { NgModule } from '@angular/core';
import {
    MatButtonModule, MatIconModule, MatInputModule,
    MatFormFieldModule, MatDatepickerModule, MatNativeDateModule,
    MatCheckboxModule, MatSidenavModule, MatToolbarModule,
    MatListModule, MatTabsModule, MatCardModule,
    MatSelectModule, MatProgressSpinnerModule, MatDialogModule,
    MatTableModule, MatSortModule, MatPaginatorModule,
    MatSnackBarModule,
    MatRadioModule
} from '@angular/material';

const types = [MatButtonModule, MatIconModule, MatInputModule,
    MatFormFieldModule, MatDatepickerModule, MatNativeDateModule,
    MatCheckboxModule, MatSidenavModule, MatToolbarModule,
    MatListModule, MatTabsModule, MatCardModule,
    MatSelectModule, MatProgressSpinnerModule, MatDialogModule,
    MatTableModule, MatSortModule, MatPaginatorModule,
    MatSnackBarModule, MatRadioModule
];

@NgModule({
    imports: types,
    exports: types
})
export class MaterialModule { }
