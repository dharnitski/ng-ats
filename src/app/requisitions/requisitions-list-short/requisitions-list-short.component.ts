import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RequisitionsFilterModalComponent } from '../requisitions-filter-modal/requisitions-filter-modal.component';

@Component({
  selector: 'app-requisitions-list-short',
  templateUrl: './requisitions-list-short.component.html',
  styleUrls: ['./requisitions-list-short.component.css']
})
export class RequisitionsListShortComponent implements OnInit {

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
