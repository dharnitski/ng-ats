import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromReqs from '../requisitions.reducer';
import { reqSelected } from '../requisitions.actions';

@Component({
  selector: 'app-requisition-candidates',
  templateUrl: './requisition-candidates.component.html',
  styleUrls: ['./requisition-candidates.component.css']
})
export class RequisitionCandidatesComponent implements OnInit {

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
  }

}
