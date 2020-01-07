/**
 * Item of Requisition list
 */
export interface ReqItem {
  id: number;
  title: string;
  status: string;
  date_created: string;
  candidates_count: number;
  city: string;
  state: string;
}
