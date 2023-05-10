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
  selector: 'app-operation-records',
  templateUrl: './operation-records.component.html',
  styleUrls: ['./operation-records.component.css'],
})
export class OperationRecordsComponent {
  operationRecordForm!: FormGroup;
  maxDate!: Date;
  selectedTime!: string;

  selectedStatus!: 'Alive';
  birthStatusOption!: string[];
  genders!: string[];
  bloodGroups!: string[];
  codes!: string[];
  departments!: string[];
  @Input('title') title!: string;
  constructor(
    private common: CommonDataService,
    private _fb: FormBuilder,
    private dateAdapter: DateAdapter<Date>
  ) {}

  ngOnInit(): void {
    this.genders = this.common.getGenders();
    this.birthStatusOption = this.common.getStatus();
    // this.bloodGroups = this.common.getBloodGroups();
    // this.codes = this.common.getCodes();
    this.operationRecordForm = this._fb.group({
      patientId: ['', [Validators.required, Validators.minLength(5)]],
      operatedBy: ['', [Validators.required, Validators.minLength(5)]],
      patientFirstName: ['', [Validators.required, Validators.minLength(3)]],
      patientLastName: ['', [Validators.required, Validators.minLength(3)]],
      patientAge: ['', [Validators.required, Validators.max(120)]],
      patientGender: ['', [Validators.required]],
      operationFor: ['', [Validators.required]],
      operationDuration: ['', [Validators.required]],
      operationTime: ['', [Validators.required]],
      // causalties
      medication: ['', [Validators.required]],
      otherDetails: [''],
    });
  }
  myFilter = (date: Date | null): boolean => {
    return moment(date).isSameOrBefore(this.maxDate, 'day');
  };
  onReset() {
    this.operationRecordForm.reset();
  }
  onSubmit() {
    console.log(this.operationRecordForm.value);
    this.operationRecordForm.reset();
  }
}
