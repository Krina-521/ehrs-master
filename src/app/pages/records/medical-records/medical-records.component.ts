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
  selector: 'app-medical-records',
  templateUrl: './medical-records.component.html',
  styleUrls: ['./medical-records.component.css'],
})
export class MedicalRecordsComponent {
  medicationRecordsForm!: FormGroup;
  maxDate!: Date;
  @Input('title') title!: string;

  constructor(
    private common: CommonDataService,
    private _fb: FormBuilder,
    private dateAdapter: DateAdapter<Date>
  ) {}

  ngOnInit(): void {
    this.medicationRecordsForm = this._fb.group({
      prescribedBy: ['', [Validators.required]],
      patientId: ['', [Validators.required]],
      pharmacistId: ['', [Validators.required]],
      meds: ['', [Validators.required]],
      recordDate: ['', [Validators.required]],
      billId: ['', [Validators.required]],
    });
  }
  myFilter = (date: Date | null): boolean => {
    return moment(date).isSameOrBefore(this.maxDate, 'day');
  };
  onSubmit() {
    console.log(this.medicationRecordsForm.value());

    this.medicationRecordsForm.reset();
  }
  onReset() {
    this.medicationRecordsForm.reset();
  }
}
