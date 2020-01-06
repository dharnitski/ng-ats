import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';



const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
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
