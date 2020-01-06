import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CandidatesRoutingModule } from './candidates-routing.module';
import { CandidatesComponent } from './candidates.component';
import { CandidatesFilterComponent } from './candidates-filter/candidates-filter.component';
import { MaterialModule } from '../material.module';
import { CandidatesSharedModule } from './shared/candidates-shared.module';


@NgModule({
  declarations: [
    CandidatesComponent,
    CandidatesFilterComponent],
  imports: [
    CommonModule,
    CandidatesRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    // dynamic component exception for Material Components
    MatDialogModule,
    CandidatesSharedModule
  ]
})
export class CandidatesModule { }
