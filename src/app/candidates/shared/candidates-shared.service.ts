import { Observable, of } from 'rxjs';
import { CandItem, CandFilter } from './candidates-shared.model';
import { allCand } from './candidates-shared.mock';

export class CandidatesService {

  getCandidates(filter: CandFilter): Observable<CandItem[]> {
    if (!filter.reqId) {
      return of(allCand);
    } else {
      return of(allCand.filter(cand => cand.reqId === filter.reqId));
    }
  }
}
