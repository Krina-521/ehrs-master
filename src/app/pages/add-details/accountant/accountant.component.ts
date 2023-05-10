import { Component, Input } from '@angular/core';
import { CommonDataService } from 'src/app/services/common-data.service';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-accountant',
  templateUrl: './accountant.component.html',
  styleUrls: ['./accountant.component.css']
})
export class AccountantComponent {
  genders!: string[];
  bloodGroups!: string[];
  codes!: string[];
  departments!: string[];
  accountantForm!: FormGroup;
  @Input('title') title!: string;
  constructor(
    private common: CommonDataService,
    private _fb: FormBuilder
    ){}

  ngOnInit(): void {
    this.genders = this.common.getGenders();
    this.bloodGroups = this.common.getBloodGroups();
    this.codes = this.common.getCodes();
    this.accountantForm = this._fb.group({
      accountantFirstName: ['', [Validators.required, Validators.minLength(3)]],
      accountantLastName: ['', [Validators.required, Validators.minLength(3)]],
      accountantEmail: ['', [Validators.required, Validators.email]],
      accountantGender: ['', [Validators.required]],
      accountantAge: ['', [Validators.required, Validators.max(150)]],
      accountantBloodGroup: ['', [Validators.required]],
      accountantAddress: ['', [Validators.required]],
      accountantCountryCode: ['', [Validators.required]],
      accountantPhoneNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      accountantDepartment: ['', [Validators.required]],
    });
  }
  get accountantFirstName(){
    return this.accountantForm.get('accountantFirstName');
  }
  get accountantLastName(){
    return this.accountantForm.get('accountantLastName');
  }
  get accountantEmail(){
    return this.accountantForm.get('accountantEmail');
  }
  get accountantGender(){
    return this.accountantForm.get('accountantGender');
  }
  get accountantAge(){
    return this.accountantForm.get('accountantAge');
  }
  get accountantBloodGroup(){
    return this.accountantForm.get('accountantBloodGroup');
  }
  get accountantDepartment(){
    return this.accountantForm.get('accountantDepartment');
  }
  get accountantAddress(){
    return this.accountantForm.get('accountantAddress');
  }
  get accountantCountryCode(){
    return this.accountantForm.get('accountantCountryCode');
  }
  get accountantPhoneNumber(){
    return this.accountantForm.get('accountantPhoneNumber');
  }
  onReset(){
    this.accountantForm.reset();
  }
  onSubmit(){
    console.log(this.accountantForm.value);
    this.accountantForm.reset();
  }
}
