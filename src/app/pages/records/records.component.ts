import { Component } from '@angular/core';

interface Detail {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css'],
})
export class RecordsComponent {
  selectedOption = 'Birth';
  details: Detail[] = [
    { value: 'birth-records', viewValue: 'Birth Record' },
    { value: 'death-records', viewValue: 'Death Record' },
    { value: 'operation-records', viewValue: 'Operation Record' },
    { value: 'health-records', viewValue: 'Health Record' },
    { value: 'medical-records', viewValue: 'Medical Record' },
    { value: 'billing-records', viewValue: 'Billing Record' },
  ];

  onSelection(value: string) {
    console.log(value);
    this.selectedOption = value;
  }
}
