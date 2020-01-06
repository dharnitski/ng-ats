import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CandidatesListComponent } from './candidates-list/candidates-list.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { MaterialModule } from '../../material.module';
import { CandidatesSharedRoutingModule } from './candidates-shared-routing.module';



@NgModule({
  declarations: [
    CandidatesListComponent,
    CandidateDetailsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    // dynamic component exception for Material Components
    MatDialogModule,
    CandidatesSharedRoutingModule
  ],
  exports: [
    CandidatesListComponent,
    CandidateDetailsComponent]
})
export class CandidatesSharedModule { }
