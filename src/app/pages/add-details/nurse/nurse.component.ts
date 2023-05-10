import { Component, Input } from '@angular/core';
import { CommonDataService } from 'src/app/services/common-data.service';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  FormArray,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.css'],
})
export class NurseComponent {
  genders!: string[];
  bloodGroups!: string[];
  departments!: string[];
  codes!: string[];
  nurseForm!: FormGroup;
  @Input('title') title!: string;

  constructor(private common: CommonDataService, private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.genders = this.common.getGenders();
    this.bloodGroups = this.common.getBloodGroups();
    this.departments = this.common.getDepartment();
    this.codes = this.common.getCodes();

    this.nurseForm = this._fb.group({
      nurseFirstName: ['', [Validators.required, Validators.minLength(3)]],
      nurseLastName: ['', [Validators.required, Validators.minLength(3)]],
      nurseEmail: ['', [Validators.required, Validators.email]],
      nurseDepartment: ['', [Validators.required]],
      nurseGender: ['', Validators.required],
      nurseAge: ['', [Validators.required, Validators.max(150)]],
      nurseBloodGroup: ['', [Validators.required]],
      nurseCountryCode: ['', [Validators.required]],
      nursePhoneNumber: ['', [Validators.required]],
      nurseAddress: ['', [Validators.required]],
    });
  }
  get nurseFirstName(){
    return this.nurseForm.get('nurseFirstName');
  }
  get nurseLastName(){
    return this.nurseForm.get('nurseLastName');
  }
  get nurseEmail(){
    return this.nurseForm.get('nurseEmail');
  }
  get nurseDepartment(){
    return this.nurseForm.get('nurseDepartment');
  }
  get nurseGender(){
    return this.nurseForm.get('nurseGender');
  }
  get nurseAge(){
    return this.nurseForm.get('nurseAge');
  }
  get nurseBloodGroup(){
    return this.nurseForm.get('nurseBloodGroup');
  }
  get nurseCountryCode(){
    return this.nurseForm.get('nurseCountryCode');
  }
  get nursePhoneNumber(){
    return this.nurseForm.get('nursePhoneNumber');
  }
  get nurseAddress(){
    return this.nurseForm.get('nurseAddress');
  }
  onReset() {
    this.nurseForm.reset();
  }
  onSubmit() {
    console.log(this.nurseForm.value);
    this.nurseForm.reset();
  }
}
