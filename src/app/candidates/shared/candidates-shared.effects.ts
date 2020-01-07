import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CandidatesService } from './candidates-shared.service';

@Injectable()
export class CandidatesEffects {

  // loadReqs$ = createEffect(() => this.actions$.pipe(
  //   ofType(loadRequisitions().type),
  //   mergeMap(() => this.reqService.getReqs()
  //     .pipe(
  //       map(requisitions => reqsLoaded({ requisitions })),
  //       catchError(() => EMPTY)
  //     ))
  // ));

  // loadReq$ = createEffect(() => this.actions$.pipe(
  //   ofType(reqSelected),
  //   mergeMap(action => this.reqService.getReq(action.reqId)
  //     .pipe(
  //       map(requisition => reqLoaded({ requisition })),
  //       catchError(() => EMPTY)
  //     ))
  // ));

  constructor(
    private actions$: Actions,
    private reqService: CandidatesService
  ) { }
}