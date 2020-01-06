import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id: number,
  name: string;
  candCount: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, candCount: 10, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { id: 2, candCount: 20, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { id: 3, candCount: 30, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { id: 4, candCount: 40, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { id: 5, candCount: 50, name: 'Boron', weight: 10.811, symbol: 'B' },
  { id: 6, candCount: 60, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { id: 7, candCount: 70, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { id: 8, candCount: 80, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { id: 9, candCount: 90, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { id: 10, candCount: 100, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-requisitions-list',
  templateUrl: './requisitions-list.component.html',
  styleUrls: ['./requisitions-list.component.css']
})
export class RequisitionsListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'candCount', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
