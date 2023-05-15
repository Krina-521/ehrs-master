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
  selector: 'app-health-records',
  templateUrl: './health-records.component.html',
  styleUrls: ['./health-records.component.css']
})
export class HealthRecordsComponent {
  healthRecordsForm!: FormGroup;
  maxDate!: Date;
  selectedTime!: string;

  @Input('title') title!: string;

  constructor(
    private common: CommonDataService,
    private _fb: FormBuilder,
    private dateAdapter: DateAdapter<Date>,
  ){}

  ngOnInit():void {
    this.healthRecordsForm = this._fb.group({
      recordedBy: ['', [Validators.required]],
      patientId: ['',[Validators.required]],
      heredityIssues: ['', [Validators.required]],
      allergies: ['', [Validators.required]],
      diagnoses: ['', [Validators.required]],
      recordDate: ['', [Validators.required]],
      visitNo: ['', [Validators.required]],
      progressNotes: ['', [Validators.required]],
    })
  }
  myFilter = (date: Date | null): boolean => {
    return moment(date).isSameOrBefore(this.maxDate, 'day');
  };
  onSubmit(){
    console.log(this.healthRecordsForm.value());

    this.healthRecordsForm.reset();
  }
  onReset(){
    this.healthRecordsForm.reset();
  }
}
