import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequisitionsComponent } from './requisitions.component';
import { RequisitionDetailsComponent } from './requisition-details/requisition-details.component';

const routes: Routes = [
  { path: '', component: RequisitionsComponent },
  { path: 'req/:id', component: RequisitionDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequisitionsRoutingModule { }
