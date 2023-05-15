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
import * as moment from 'moment';

@Component({
  selector: 'app-death-records',
  templateUrl: './death-records.component.html',
  styleUrls: ['./death-records.component.css'],
})
export class DeathRecordsComponent {
  maxDate!: Date;
  genders!: string[];
  deathRecordForm!: FormGroup;

  @Input('title') title!: string;
  constructor(
    private common: CommonDataService,
    private _fb: FormBuilder,
    private dateAdapter: DateAdapter<Date>
  ) {}

  ngOnInit(): void {
    this.genders = this.common.getGenders();

    this.deathRecordForm = this._fb.group({
      deadPersonFirstName: ['', [Validators.required, Validators.minLength(3)]],
      deadPersonLastName: ['', [Validators.required, Validators.minLength(3)]],
      Gender: ['', [Validators.required]],
      patientId: ['', [Validators.required, Validators.minLength(5)]],
      birthDate: ['', [Validators.required]],
      deathDate: ['', [Validators.required]],
      causeOfDeath: ['', [Validators.required]],
      recordedBy: ['', [Validators.required]],
    });
  }
  myFilter = (date: Date | null): boolean => {
    return moment(date).isSameOrBefore(this.maxDate, 'day');
  };
  onReset() {
    this.deathRecordForm.reset();
  }
  onSubmit() {
    console.log(this.deathRecordForm.value);
    this.deathRecordForm.reset();
  }
}
