import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandidatesComponent } from './candidates.component';
import { CandidateDetailsComponent } from './shared/candidate-details/candidate-details.component';

const routes: Routes = [
  { path: '', component: CandidatesComponent },
  { path: ':cand_id', component: CandidateDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatesRoutingModule { }
