import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

import * as fromReqs from '../requisitions.reducer';
import { ReqFilter } from '../requisitions.model';
import { reqFilterChanged } from '../requisitions.actions';

@Component({
  selector: 'app-requisitions-filter',
  templateUrl: './requisitions-filter.component.html',
  styleUrls: ['./requisitions-filter.component.css']
})
export class RequisitionsFilterComponent implements OnInit {
  keywords = '';

  constructor(
    private store: Store<fromReqs.State>
  ) { }

  ngOnInit() {
    this.store.select(fromReqs.selectReqFilterKeywords)
      .pipe(take(1))
      .subscribe((keywords: string) => this.keywords = keywords);
  }

  keywordsChanged(keywords: string) {
    this.store.select(fromReqs.selectReqFilter)
      .pipe(take(1))
      .subscribe((filter: ReqFilter) => this.store.dispatch(reqFilterChanged({
        filter: {
          ...filter,
          keywords
        }
      })));
  }

}
