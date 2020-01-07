import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CandidatesListComponent } from './candidates-list/candidates-list.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { MaterialModule } from '../../material.module';
import { CandidatesSharedRoutingModule } from './candidates-shared-routing.module';
import * as fromCand from './candidates-shared.reducer';
import { CandidatesEffects } from './candidates-shared.effects';
import { CandidatesService } from './candidates-shared.service';





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
    CandidatesSharedRoutingModule,
    StoreModule.forFeature(fromCand.candidatesFeatureKey, fromCand.reducer),
    EffectsModule.forFeature([CandidatesEffects])
  ],
  exports: [
    CandidatesListComponent,
    CandidateDetailsComponent
  ],
  providers: [
    CandidatesService
  ]
})
export class CandidatesSharedModule { }
