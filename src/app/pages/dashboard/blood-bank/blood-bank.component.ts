import { Location } from '@angular/common';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  id: number;
  bloodGroup: string;
  noOfBags: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, bloodGroup: 'A+', noOfBags: 19 },
  {id: 2, bloodGroup: 'A-', noOfBags: 46 },
  {id: 3, bloodGroup: 'B+', noOfBags: 6},
  {id: 4, bloodGroup: 'B-', noOfBags: 92 },
  {id: 5, bloodGroup: 'O+', noOfBags: 10 },
  {id: 6, bloodGroup: 'O-', noOfBags: 127},
  {id: 7, bloodGroup: 'AB+', noOfBags: 147},
  {id: 8, bloodGroup: 'AB-', noOfBags: 15 },
];

@Component({
  selector: 'app-blood-bank',
  templateUrl: './blood-bank.component.html',
  styleUrls: ['./blood-bank.component.css']
})
export class BloodBankComponent {

  displayedColumns: string[] = ['#', 'bloodGroup', 'noOfBags'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  constructor(
    private location: Location,
    ){}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  goBack(){
    this.location.back();
  }
}

