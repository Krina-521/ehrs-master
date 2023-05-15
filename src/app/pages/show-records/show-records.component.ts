import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonDataService } from 'src/app/services/common-data.service';

interface Detail {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-data',
  templateUrl: './show-records.component.html',
  styleUrls: ['./show-records.component.css'],
})
export class ShowRecordsComponent {
  @Input('title') title!: string;
  selectedOption = 'birthRecord';
  details: Detail[] = [
    { value: 'birthRecord', viewValue: 'Birth Record' },
    { value: 'deathRecord', viewValue: 'Death Record' },
    { value: 'operationRecord', viewValue: 'Operation Record' },
    { value: 'healthRecord', viewValue: 'Health Record' },
    { value: 'medicalRecord', viewValue: 'Medical Record' },
    { value: 'billingRecord', viewValue: 'Billing Record' },
  ];

  onSelection(value: string) {
    console.log(value);
    this.selectedOption = value;
  }
}
