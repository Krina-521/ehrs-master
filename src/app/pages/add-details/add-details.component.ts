import { Component } from '@angular/core';

interface Detail{
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent {
  selectedOption = 'Doctor';
  details: Detail[] = [
    {value: 'department', viewValue: 'Department'},
    {value: 'doctor', viewValue: 'Doctor'},
    {value: 'patient', viewValue: 'Patient'},
    {value: 'nurse', viewValue: 'Nurse'},
    {value: 'pharmacist', viewValue: 'Pharmacist'},
    {value: 'laboratorist', viewValue: 'Laboratorist'},
    {value: 'accountant', viewValue: 'Accountant'},
    {value: 'receptionist', viewValue: 'Receptionist'},
  ];

  onSelection(value: string){
    console.log(value);
    this.selectedOption = value;
  }
}
