import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { CommonDataService } from 'src/app/services/common-data.service';

@Component({
  selector: 'app-pharmacist',
  templateUrl: './pharmacist.component.html',
  styleUrls: ['./pharmacist.component.css']
})
export class PharmacistComponent {
  pharmacistForm!: FormGroup;
  genders!: string[];
  bloodGroups!: string[];
  departments!: string[];
  codes!: string[];
  @Input('title') title!: string;

  constructor(
    private _fb: FormBuilder,
    private common: CommonDataService
  ){}

  ngOnInit(): void {
    this.genders = this.common.getGenders();
    this.bloodGroups = this.common.getBloodGroups();
    this.departments = this.common.getDepartment();
    this.codes = this.common.getCodes();

    this.pharmacistForm = this._fb.group({
      pharmacistFirstName: ['', [Validators.required, Validators.minLength(3)]],
      pharmacistLastName: ['', [Validators.required, Validators.minLength(3)]],
      pharmacistEmail: ['', [Validators.required, Validators.email]],
      pharmacistDepartment: ['', [Validators.required]],
      pharmacistGender: ['', Validators.required],
      pharmacistAge: ['', [Validators.required, Validators.max(150)]],
      pharmacistBloodGroup: ['', [Validators.required]],
      pharmacistCountryCode: ['', [Validators.required]],
      pharmacistPhoneNumber: ['', [Validators.required]],
      pharmacistAddress: ['', [Validators.required]],
    });
  }
  get pharmacistFirstName(){
    return this.pharmacistForm.get('pharmacistFirstName');
  }
  get pharmacistLastName(){
    return this.pharmacistForm.get('pharmacistLastName');
  }
  get pharmacistEmail(){
    return this.pharmacistForm.get('pharmacistEmail');
  }
  get pharmacistDepartment(){
    return this.pharmacistForm.get('pharmacistDepartment');
  }
  get pharmacistGender(){
    return this.pharmacistForm.get('pharmacistGender');
  }
  get pharmacistAge(){
    return this.pharmacistForm.get('pharmacistAge');
  }
  get pharmacistBloodGroup(){
    return this.pharmacistForm.get('pharmacistBloodGroup');
  }
  get pharmacistCountryCode(){
    return this.pharmacistForm.get('pharmacistCountryCode');
  }
  get pharmacistAddress(){
    return this.pharmacistForm.get('pharmacistAddress');
  }
  get pharmacistPhoneNumber(){
    return this.pharmacistForm.get('pharmacistPhoneNumber');
  }
  onReset(){
    this.pharmacistForm.reset();
  }
  onSubmit(){
    console.log(this.pharmacistForm.value);
    this.pharmacistForm.reset();
  }
}
