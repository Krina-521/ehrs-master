import { Component, Input } from '@angular/core';
import { CommonDataService } from 'src/app/services/common-data.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
})
export class PatientsComponent {
  genders!: string[];
  bloodGroups!: string[];
  departments!: string[];
  codes!: string[];
  patientForm!: FormGroup;
  @Input('title') title!: string;

  constructor(private common: CommonDataService, private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.genders = this.common.getGenders();
    this.bloodGroups = this.common.getBloodGroups();
    this.departments = this.common.getDepartment();
    this.codes = this.common.getCodes();

    this.patientForm = this._fb.group({
      patientFirstName: ['', [Validators.required, Validators.minLength(3)]],
      patientLastName: ['', [Validators.required, Validators.minLength(3)]],
      patientEmail: ['', [Validators.required, Validators.email]],
      extraDetails: ['', [Validators.required]],
      patientGender: ['', [Validators.required]],
      patientBirthDate: ['', [Validators.required, Validators.max(150)]],
      patientBloodGroup: ['', [Validators.required]],
      patientCountryCode: ['', [Validators.required]],
      patientPhoneNumber: [
        '',
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
      patientAddress: ['', [Validators.required]],
      insuranceCardNumber: ['', Validators.required],
    });
  }
  get patientFirstName() {
    return this.patientForm.get('patientFirstName');
  }
  get patientLastName() {
    return this.patientForm.get('patientLastName');
  }
  get patientEmail() {
    return this.patientForm.get('patientEmail');
  }
  get extraDetails() {
    return this.patientForm.get('extraDetails');
  }
  get patientGender() {
    return this.patientForm.get('patientGender');
  }
  get patientBirthDate() {
    return this.patientForm.get('patientBirthDate');
  }
  get patientBloodGroup() {
    return this.patientForm.get('patientBloodGroup');
  }
  get patientAddress() {
    return this.patientForm.get('patientAddress');
  }
  get patientCountryCode() {
    return this.patientForm.get('patientCountryCode');
  }
  get patientPhoneNumber() {
    return this.patientForm.get('patientPhoneNumber');
  }
  onReset() {
    this.patientForm.reset();
  }
  onSubmit() {
    console.log(this.patientForm.value);
    this.patientForm.reset();
  }
}
