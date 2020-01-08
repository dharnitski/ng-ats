import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { reqsLoaded, reqSelected, reqLoaded, reqFilterChanged } from './requisitions.actions';
import { RequisitionService } from './requisitions.service';

@Injectable()
export class RequisitionsEffects {

  loadReqs$ = createEffect(() => this.actions$.pipe(
    ofType(reqFilterChanged),
    mergeMap(action => this.reqService.getReqs(action.filter)
      .pipe(
        map(requisitions => reqsLoaded({ requisitions })),
        catchError(() => EMPTY)
      )
    )
  ));

  loadReq$ = createEffect(() => this.actions$.pipe(
    ofType(reqSelected),
    mergeMap(action => this.reqService.getReq(action.reqId)
      .pipe(
        map(requisition => reqLoaded({ requisition })),
        catchError(() => EMPTY)
      ))
  ));

  constructor(
    private actions$: Actions,
    private reqService: RequisitionService
  ) { }
}
