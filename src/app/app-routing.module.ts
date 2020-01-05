import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [{
  path: 'requisitions',
  loadChildren: () => import('./requisitions/requisitions.module').then(m => m.RequisitionsModule)
},
{
  path: 'candidates',
  loadChildren: () => import('./candidates/candidates.module').then(m => m.CandidatesModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
