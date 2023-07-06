import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonDataService } from 'src/app/services/common-data.service';

interface Detail {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css'],
})
export class ShowDetailsComponent {
  @Input('title') title!: string;
  selectedOption = 'birthRecord';
  details: Detail[] = [
    { value: 'department', viewValue: 'Department' },
    { value: 'staff', viewValue: 'Staff' },
    { value: 'patient', viewValue: 'Patient' },
  ];

  onSelection(value: string) {
    console.log(value);
    this.selectedOption = value;
  }
}

// Data table with sorting, pagination, and filtering.
