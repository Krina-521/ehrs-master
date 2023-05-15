import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonDataService } from 'src/app/services/common-data.service';

interface Detail {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css'],
})
export class AddDetailsComponent {
  @Input('title') title!: string;
  selectedOption = 'Department';
  details: Detail[] = [
    { value: 'department', viewValue: 'Department' },
    { value: 'staff', viewValue: 'Staff' },
    { value: 'patient', viewValue: 'Patient' },
    //   {value: 'nurse', viewValue: 'Nurse'},
    //   {value: 'pharmacist', viewValue: 'Pharmacist'},
    //   {value: 'laboratorist', viewValue: 'Laboratorist'},
    //   {value: 'accountant', viewValue: 'Accountant'},
    //   {value: 'receptionist', viewValue: 'Receptionist'},
  ];

  onSelection(value: string) {
    console.log(value);
    this.selectedOption = value;
  }
}
