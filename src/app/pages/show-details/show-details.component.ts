import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

interface Category{
  value: string;
  viewValue: string;
}

export interface Data{
  name: string;
  email: string;
  address: string;
  phone: number;
  department: string;
}

const DETAILS: string [] = [
  ''
]

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent {
  // categoriesControl = new FormControl([]);
  // categories: string[] = ['Doctor', 'Patient', 'Nurse', 'Accountant', 'Laboratorist', 'Pharmacist', 'Receptionist'];

  // onCatRemoved(cat: string){
  //   const categories = this.categoriesControl.value as string[];
  //   this.removeFirst(categories, cat);
  //   this.categoriesControl.setValue(categories);
  // }

  // private removeFirst(array: string[], toRemove: string): void{
  //   const index = array.indexOf(toRemove);
  //   if(index !== -1){
  //     array.splice(index, 1);
  //   }
  // }
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};

  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource!: MatTableDataSource<Data>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(){}

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Doctor' },
      { item_id: 2, item_text: 'Patient' },
      { item_id: 3, item_text: 'Nurse' },
      { item_id: 4, item_text: 'Pharmacist' },
      { item_id: 5, item_text: 'Laboratorist' },
      { item_id: 6, item_text: 'Accountant' },
      { item_id: 7, item_text: 'Receptionist' },
    ];

    this.selectedItems = [
      { item_id: 1, item_text: 'Doctor' }
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 8,
      allowSearchFilter: true
    };
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onItemSelect(ev: any){

  }
  onSelectAll(ev: any){

  }
}

// Data table with sorting, pagination, and filtering.
