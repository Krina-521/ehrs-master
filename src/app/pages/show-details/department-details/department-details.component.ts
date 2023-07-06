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
  departmentCode: string;
  departmentName: string;
  description: string;
}

const DETAILS: Data[] = [
  {
    id: 1,
    departmentCode: 'OR',
    departmentName: 'Operating Room',
    description: 'Surgical procedure',
  },
  {
    id: 2,
    departmentCode: 'ICU',
    departmentName: 'Intensive Care Unit',
    description: 'Critical conditioned patient are handled there',
  },
  {
    id: 3,
    departmentCode: 'OPT',
    departmentName: 'Optometrist',
    description: 'Examine, diagnoses, give treatment diseases related to eyes.',
  },
  {
    id: 4,
    departmentCode: 'GYN',
    departmentName: 'Gynecology',
    description: 'Prenatal care center, Child Birth center',
  },
  {
    id: 5,
    departmentCode: 'ED',
    departmentName: 'Emergency Department',
    description:
      'Urgent medical treatment to any patient having serious illness or injuries',
  },
  // {
  //   id: 6,
  //   departmentCode: 'PED',
  //   departmentName: 'Pediatrics',
  //   description: 'Infants treatment, their medication, vaccination',
  // },
];

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css'],
})
export class DepartmentDetailsComponent {
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};

  displayedColumns: string[] = [
    'id',
    'departmentCode',
    'departmentName',
    'description',
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
