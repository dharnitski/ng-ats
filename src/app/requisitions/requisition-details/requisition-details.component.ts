import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RequisitionsFilterModalComponent } from '../requisitions-filter-modal/requisitions-filter-modal.component';

@Component({
  selector: 'app-requisition-details',
  templateUrl: './requisition-details.component.html',
  styleUrls: ['./requisition-details.component.css']
})
export class RequisitionDetailsComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  onFilterClick() {
    const dialogRef = this.dialog.open(RequisitionsFilterModalComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      // if (result) {
      //   this.trainingService.cancelExercise(this.progress);
      // } else {
      //   this.startOrResumeTimer();
      // }
    });
  }
}
