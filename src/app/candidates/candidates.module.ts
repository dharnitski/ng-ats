import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesRoutingModule } from './candidates-routing.module';
import { CandidatesComponent } from './candidates.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [CandidatesComponent],
  imports: [
    CommonModule,
    CandidatesRoutingModule,
    FlexLayoutModule
  ]
})
export class CandidatesModule { }
