import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

interface Category {
  value: string;
  viewValue: string;
}

export interface Data {
  id: number;
  name: string;
  lastName: string;
  gender: string;
  patientId: string;
  motherName: string;
  fatherName: string;
  birthDate: string;
  birthTime: string;
  weight: number;
  height: number;
  status: string;
}

const DETAILS: Data[] = [
  {
    id: 1,
    name: 'Aariv',
    lastName: 'Shah',
    gender: 'Male',
    patientId: 'PR-01237',
    motherName: 'Kesha',
    fatherName: 'Jeet',
    birthDate: '07/23/2022',
    birthTime: '14:45',
    weight: 3,
    height: 2,
    status: 'Live',
  },
  {
    id: 2,
    name: 'Ram',
    lastName: 'Vekariya',
    gender: 'Male',
    patientId: 'PR-03239',
    motherName: 'Pooja',
    fatherName: 'Prakash',
    birthDate: '12/04/2022',
    birthTime: '22:05',
    weight: 2.5,
    height: 2.2,
    status: 'Live',
  },
  {
    id: 3,
    name: 'Pihu',
    lastName: 'Kapoor',
    gender: 'Male',
    patientId: 'PR-04537',
    motherName: 'Priya',
    fatherName: 'Ram',
    birthDate: '10/20/2022',
    birthTime: '08:14',
    weight: 3.2,
    height: 2.4,
    status: 'Live',
  },
];
@Component({
  selector: 'app-birth-records',
  templateUrl: './birth-records.component.html',
  styleUrls: ['./birth-records.component.css'],
})
export class BirthRecordsComponent {
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};

  displayedColumns: string[] = [
    'id',
    'name',
    'lastName',
    'gender',
    'patientId',
    'motherName',
    'fatherName',
    'birthDate',
    'birthTime',
    'weight',
    'height',
    'status',
  ];
  dataSource = new MatTableDataSource(DETAILS);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {}

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

    this.selectedItems = [{ item_id: 1, item_text: 'Doctor' }];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 8,
      allowSearchFilter: true,
    };
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onItemSelect(ev: any) {}
  onSelectAll(ev: any) {}
}
