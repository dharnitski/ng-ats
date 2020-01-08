import { Observable, of } from 'rxjs';
import { ReqItem, ReqFilter } from './requisitions.model';
import { allItems } from './requisitions.mock';

export class RequisitionService {

  getReqs(filter: ReqFilter): Observable<ReqItem[]> {
    let keywords = '';
    // null is valid value here
    if (filter.keywords) {
      keywords = filter.keywords.toLowerCase();
    }
    return of(allItems.filter(req => req.title.toLowerCase().includes(keywords)));
  }

  getReq(id: number): Observable<ReqItem> {
    return of(allItems.find(req => req.id === id));
  }

}
