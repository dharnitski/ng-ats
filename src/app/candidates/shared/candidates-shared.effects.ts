import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CandidatesService } from './candidates-shared.service';
import { candidatesLoaded, candFilterChanged } from './candidates-shared.actions';

@Injectable()
export class CandidatesEffects {

  loadCandidates$ = createEffect(() => this.actions$.pipe(
    ofType(candFilterChanged),
    mergeMap(action => this.candService.getCandidates(action.filter)
      .pipe(
        map(candidates => candidatesLoaded({ candidates })),
        catchError(() => EMPTY)
      )
    )
  ));

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
    private candService: CandidatesService
  ) { }
}