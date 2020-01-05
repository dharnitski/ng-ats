import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequisitionsComponent } from './requisitions.component';

const routes: Routes = [{ path: '', component: RequisitionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequisitionsRoutingModule { }
