import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromReqs from '../requisitions.reducer';
import { reqSelected } from '../requisitions.actions';
import { ReqItem } from '../requisitions.model';

@Component({
  selector: 'app-requisition-details',
  templateUrl: './requisition-details.component.html',
  styleUrls: ['./requisition-details.component.css']
})
export class RequisitionDetailsComponent implements OnInit {

  requisition$: Observable<ReqItem>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromReqs.State>
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        const reqId = Number(params.req_id);
        this.store.dispatch(reqSelected({ reqId }));
      }
    );

    this.requisition$ = this.store.select(fromReqs.selectCurrentReq);
  }

}
