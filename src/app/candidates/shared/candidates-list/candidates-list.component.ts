import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromCand from '../candidates-shared.reducer';
import { candFilterChanged } from '../candidates-shared.actions';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { CandItem } from '../candidates-shared.model';

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.css']
})
export class CandidatesListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'email', 'status', 'created'];
  dataSource = new MatTableDataSource<CandItem>();

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromCand.State>
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        const reqId = Number(params.req_id);
        const candFilter$ = this.store.select(fromCand.selectFilter);
        candFilter$.subscribe(filter => {
          // todo: should we check if reqId changed?
          const newFilter = { ...filter, reqId };
          this.store.dispatch(candFilterChanged({ filter: newFilter }));
        });
      }
    );

    this.store.select(fromCand.selectCandidates).subscribe(candidates => {
      this.dataSource.data = candidates;
    });

  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
