import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequisitionsComponent } from './requisitions.component';
import { RequisitionDetailsComponent } from './requisition-details/requisition-details.component';
import { RequisitionCandidatesComponent } from './requisition-candidates/requisition-candidates.component';
import { RequisitionCandidateComponent } from './requisition-candidate/requisition-candidate.component';

const routes: Routes = [
  { path: '', component: RequisitionsComponent },
  { path: ':req_id', component: RequisitionDetailsComponent },
  { path: ':req_id/candidates', component: RequisitionCandidatesComponent },
  { path: ':req_id/candidates/:cand_id', component: RequisitionCandidateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequisitionsRoutingModule { }
