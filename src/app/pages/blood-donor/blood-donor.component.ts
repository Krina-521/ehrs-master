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
  selector: 'app-blood-donor',
  templateUrl: './blood-donor.component.html',
  styleUrls: ['./blood-donor.component.css'],
})
export class BloodDonorComponent {
  bloodDonorForm!: FormGroup;
  maxDate!: Date;
  selectedTime!: string;
  date!: Date[];
  selectedStatus!: 'Alive';
  birthStatusOption!: string[];
  genders!: string[];
  bloodGroups!: string[];
  codes!: string[];
  departments!: string[];

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
    this.bloodDonorForm = this._fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      gender: ['', [Validators.required]],
      bloodGroup: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      countryCode: ['', [Validators.required]],
      phoneNo: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      height: ['', [Validators.required]],
      lastTimeDonated: ['', [Validators.required]],
      healthHistory: ['', [Validators.required]],
    });
  }
  myFilter = (date: Date | null): boolean => {
    return moment(date).isSameOrBefore(this.maxDate, 'day');
  };
  onReset() {
    this.bloodDonorForm.reset();
  }
  onSubmit() {
    console.log(this.bloodDonorForm.value);
    this.bloodDonorForm.reset();
  }
}
