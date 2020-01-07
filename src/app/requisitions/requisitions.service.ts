import { Observable, of } from 'rxjs';
import { ReqItem } from './requisitions.model';
import { allItems } from './requisitions.mock';

export class RequisitionService {

  getReqs(): Observable<ReqItem[]> {
    return of(allItems);
  }

  getReq(id: number): Observable<ReqItem> {
    return of(allItems.find(req => req.id === id));
  }

}
