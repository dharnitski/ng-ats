import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromReqs from '../requisitions.reducer';
import { Observable } from 'rxjs';
import { ReqItem } from '../requisitions.model';
import { loadRequisitions } from '../requisitions.actions';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

export interface PeriodicElement {
  id: number,
  name: string;
  candCount: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-requisitions-list',
  templateUrl: './requisitions-list.component.html',
  styleUrls: ['./requisitions-list.component.css']
})
export class RequisitionsListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'candCount', 'title', 'status'];
  dataSource = new MatTableDataSource<ReqItem>();

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private store: Store<fromReqs.State>) { }

  ngOnInit() {
    this.store.select(fromReqs.selectRequisitions).subscribe(reqs => {
      this.dataSource.data = reqs;
    });
    this.store.dispatch(loadRequisitions());
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
