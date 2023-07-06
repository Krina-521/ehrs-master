import { Component, Input } from '@angular/core';
import { CommonDataService } from 'src/app/services/common-data.service';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  FormArray,
  Validators,
} from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
// import { MatTimepicker } from '@angular/material/timepicker';
import * as moment from 'moment';

@Component({
  selector: 'app-billing-records',
  templateUrl: './billing-records.component.html',
  styleUrls: ['./billing-records.component.css']
})
export class BillingRecordsComponent {
  billingRecordForm!: FormGroup;
  maxDate!: Date;
  @Input('title') title!: string;

  constructor(
    private common: CommonDataService,
    private _fb: FormBuilder,
    private dateAdapter: DateAdapter<Date>
  ) {}

  ngOnInit(): void {
    this.billingRecordForm = this._fb.group({
      recordedBy: ['', [Validators.required, Validators.minLength(3)]],
      patientId: ['', [Validators.required]],
      billNumber: ['', [Validators.required]],
      expenses: ['', [Validators.required]],
      recordDate: ['', [Validators.required]],
      billNotes: ['', [Validators.required]],
    });
  }
  myFilter = (date: Date | null): boolean => {
    return moment(date).isSameOrBefore(this.maxDate, 'day');
  };
  onSubmit() {
    console.log(this.billingRecordForm.value());
    this.billingRecordForm.reset();
  }
  onReset() {
    this.billingRecordForm.reset();
  }
}
