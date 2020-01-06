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


@NgModule({
  declarations: [RequisitionsComponent, RequisitionsFilterComponent, RequisitionsListComponent, RequisitionDetailsComponent],
  imports: [
    CommonModule,
    RequisitionsRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    // dynamic component exception for Material Components
    MatDialogModule,
  ]
})
export class RequisitionsModule { }
