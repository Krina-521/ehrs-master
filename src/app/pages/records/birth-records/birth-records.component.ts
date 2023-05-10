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
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';

import * as moment from 'moment';

@Component({
  selector: 'app-birth-records',
  templateUrl: './birth-records.component.html',
  styleUrls: ['./birth-records.component.css'],
})
export class BirthRecordsComponent {
  maxDate!: Date;
  selectedTime!: string;
  date!: Date[];
  selectedStatus!: 'Alive';
  birthStatusOption!: string[];
  genders!: string[];
  bloodGroups!: string[];
  codes!: string[];
  departments!: string[];
  birthRecordForm!: FormGroup;

  refresh: Subject<any> = new Subject();

  event: CalendarEvent[] = [];
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
    this.birthRecordForm = this._fb.group({
      birthChildFirstName: ['', [Validators.required, Validators.minLength(3)]],
      birthChildLastName: ['', [Validators.required, Validators.minLength(3)]],
      birthGender: ['', [Validators.required]],
      patientId: ['', [Validators.required, Validators.minLength(5)]],
      motherName: ['', [Validators.required]],
      fatherName: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      birthTime: ['', [Validators.required]],
      birthWeight: [
        '',
        [Validators.required, Validators.min(0), Validators.max(5)],
      ],
      birthHeight: ['', [Validators.required, Validators.max(100)]],
      operationId: ['', [Validators.required]],
      // accountantPhoneNumber: [
      //   '',
      //   [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      // ],
      // accountantDepartment: ['', [Validators.required]],
    });
  }
  myFilter = (date: Date | null): boolean => {
    return moment(date).isSameOrBefore(this.maxDate, 'day');
  };
  onReset() {
    this.birthRecordForm.reset();
  }
  onSubmit() {
    console.log(this.birthRecordForm.value);
    this.birthRecordForm.reset();
  }
}
