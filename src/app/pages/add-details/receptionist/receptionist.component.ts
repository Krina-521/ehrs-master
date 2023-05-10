import { Component, Input } from '@angular/core';
import { CommonDataService } from 'src/app/services/common-data.service';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-receptionist',
  templateUrl: './receptionist.component.html',
  styleUrls: ['./receptionist.component.css']
})
export class ReceptionistComponent {
  genders!: string[];
  bloodGroups!: string[];
  departments!: string[];
  codes!: string[];
  receptionistForm!: FormGroup;
  @Input('title') title!: string;

  constructor(
    private common: CommonDataService,
    private _fb: FormBuilder
    ){}

  ngOnInit(): void {
    this.genders = this.common.getGenders();
    this.bloodGroups = this.common.getBloodGroups();
    this.departments = this.common.getDepartment();
    this.codes = this.common.getCodes();

    this.receptionistForm = this._fb.group({
      receptionistFirstName: ['', [Validators.required, Validators.minLength(3)]],
      receptionistLastName: ['', [Validators.required, Validators.minLength(3)]],
      receptionistEmail: ['', [Validators.required, Validators.email]],
      receptionistGender: ['', [Validators.required]],
      receptionistAge: ['', [Validators.required, Validators.max(150)]],
      receptionistBloodGroup: ['', [Validators.required]],
      receptionistAddress: ['', [Validators.required]],
      receptionistCountryCode: ['', [Validators.required]],
      receptionistPhoneNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      receptionistDepartment: ['', [Validators.required]],
    });
  }
  get receptionistFirstName(){
    return this.receptionistForm.get('receptionistFirstName');
  }
  get receptionistLastName(){
    return this.receptionistForm.get('receptionistLastName');
  }
  get receptionistEmail(){
    return this.receptionistForm.get('receptionistEmail');
  }
  get receptionistGender(){
    return this.receptionistForm.get('receptionistGender');
  }
  get receptionistAge(){
    return this.receptionistForm.get('receptionistAge');
  }
  get receptionistBloodGroup(){
    return this.receptionistForm.get('receptionistBloodGroup');
  }
  get receptionistDepartment(){
    return this.receptionistForm.get('receptionistDepartment');
  }
  get receptionistAddress(){
    return this.receptionistForm.get('receptionistAddress');
  }
  get receptionistCountryCode(){
    return this.receptionistForm.get('receptionistCountryCode');
  }
  get receptionistPhoneNumber(){
    return this.receptionistForm.get('receptionistPhoneNumber');
  }
  onReset(){
    this.receptionistForm.reset();
  }
  onSubmit(){
    console.log(this.receptionistForm.value);
    this.receptionistForm.reset();
  }
}
