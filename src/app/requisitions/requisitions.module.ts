import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequisitionsRoutingModule } from './requisitions-routing.module';
import { RequisitionsComponent } from './requisitions.component';
import { RequisitionsFilterComponent } from './requisitions-filter/requisitions-filter.component';
import { RequisitionsListComponent } from './requisitions-list/requisitions-list.component';
import { RequisitionDetailsComponent } from './requisition-details/requisition-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material';
import { MaterialModule } from '../material.module';
import { RequisitionsFilterModalComponent } from './requisitions-filter-modal/requisitions-filter-modal.component';
import { RequisitionCandidatesComponent } from './requisition-candidates/requisition-candidates.component';
import { RequisitionsListShortComponent } from './requisitions-list-short/requisitions-list-short.component';
import { RequisitionCandidateComponent } from './requisition-candidate/requisition-candidate.component';
import { CandidatesSharedModule } from '../candidates/shared/candidates-shared.module';


@NgModule({
  declarations: [
    RequisitionsComponent,
    RequisitionsFilterComponent,
    RequisitionsListComponent,
    RequisitionDetailsComponent,
    RequisitionsFilterModalComponent,
    RequisitionCandidatesComponent,
    RequisitionsListShortComponent,
    RequisitionCandidateComponent,
  ],
  imports: [
    CommonModule,
    RequisitionsRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    // dynamic component exception for Material Components
    MatDialogModule,
    CandidatesSharedModule
  ],
  entryComponents: [RequisitionsFilterModalComponent]
})
export class RequisitionsModule { }
