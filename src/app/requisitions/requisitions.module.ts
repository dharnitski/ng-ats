import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequisitionsRoutingModule } from './requisitions-routing.module';
import { RequisitionsComponent } from './requisitions.component';


@NgModule({
  declarations: [RequisitionsComponent],
  imports: [
    CommonModule,
    RequisitionsRoutingModule
  ]
})
export class RequisitionsModule { }
