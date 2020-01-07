/**
 * Item of Requisition list
 */
export interface CandItem {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  status: string;
  created: string;
  reqId: number;
}

export interface CandFilter {
  reqId: number;
}
