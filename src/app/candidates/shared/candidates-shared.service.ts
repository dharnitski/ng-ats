import { Observable, of } from 'rxjs';
import { CandItem } from './candidates-shared.model';
import { allCand } from './candidates-shared.mock';

export class CandidatesService {

  getReqCandidates(reqId: number): Observable<CandItem[]> {
    return of(allCand.filter(cand => cand.reqId === reqId));
  }

}
