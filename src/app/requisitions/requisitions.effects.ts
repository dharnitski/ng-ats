import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { reqsLoaded, loadRequisitions } from './requisitions.actions';
import { RequisitionService } from './requisitions.service';
import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY } from '@angular/cdk/overlay/typings/overlay-directives';

@Injectable()
export class RequisitionsEffects {

  loadReqs$ = createEffect(() => this.actions$.pipe(
    ofType(loadRequisitions().type),
    mergeMap(() => this.reqService.getReqs()
      .pipe(
        map(requisitions => reqsLoaded({ requisitions })),
        catchError(() => EMPTY)
      ))
  ));

  constructor(
    private actions$: Actions,
    private reqService: RequisitionService
  ) { }
}
