import { Component } from '@angular/core';
import { CommonDataService } from 'src/app/services/common-data.service';
// import { AuthService } from '../auth.service';
// import { ImageUploadService } from '../services/image-upload.service';
import { HotToastService } from '@ngneat/hot-toast';
// import { User } from 'firebase/auth';
import { concatMap } from 'rxjs';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  // user$ = this.authService.currentUser$;
  genders!: string[];
  bloodGroups!: string[];
  relationShip!: string[];
  profileForm!: FormGroup;
  constructor(
    private common: CommonDataService,
    private _fb: FormBuilder,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {
    this.genders = this.common.getGenders();
    this.bloodGroups = this.common.getBloodGroups();
    this.relationShip = this.common.getRelationshipStatus();
    this.profileForm = this._fb.group({
      personaldetails: this._fb.group({
        firstname: ['', [Validators.required, Validators.minLength(3)]],
        lastname: ['', [Validators.required, Validators.minLength(3)]],
        birthday: ['', Validators.required],
        bloodGroup: ['', Validators.required],
        gender: ['', Validators.required],
        relation: ['', Validators.required],
      }),
      contactdetails: this._fb.group({
        address: ['', [Validators.required, Validators.minLength(20)]],
        city: [''],
        state: ['', Validators.required],
        zipcode: [''],
        country: ['', Validators.required],
        cellphone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        emergencyPersonName: ['', Validators.required],
        emergencyContact: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        emergencyContactRelation: ['', Validators.required],
        phone: [''],
        fax: [''],
        email: ['', [Validators.required, Validators.email]],
        secondaryemail: ['', Validators.email],
      }),
    });
  }

  get personaldetails() {
    return this.profileForm.get('personaldetails');
  }
  get contactdetails() {
    return this.profileForm.get('contactdetails');
  }

  get firstname() {
    return this.profileForm.get('personaldetails')?.get('firstname');
  }
  get lastname() {
    return this.profileForm.get('personaldetails')?.get('lastname');
  }
  get birthday() {
    return this.profileForm.get('personaldetails')?.get('birthday');
  }
  get bloodGroup() {
    return this.profileForm.get('personaldetails')?.get('bloodGroup');
  }
  get gender() {
    return this.profileForm.get('personaldetails')?.get('gender');
  }
  get relation() {
    return this.profileForm.get('personaldetails')?.get('relation');
  }
  get address() {
    return this.profileForm.get('contactdetails')?.get('address');
  }
  get city() {
    return this.profileForm.get('contactdetails')?.get('city');
  }
  get state() {
    return this.profileForm.get('contactdetails')?.get('state');
  }
  get zipcode() {
    return this.profileForm.get('contactdetails')?.get('zipcode');
  }
  get country() {
    return this.profileForm.get('contactdetails')?.get('country');
  }
  get cellphone() {
    return this.profileForm.get('contactdetails')?.get('cellphone');
  }
  get emergencyPersonName() {
    return this.profileForm.get('contactdetails')?.get('emergencyPersonName');
  }
  get emergencyContact() {
    return this.profileForm.get('contactdetails')?.get('emergencyContact');
  }
  get emergencyContactRelation() {
    return this.profileForm
      .get('contactdetails')
      ?.get('emergencyContactRelation');
  }
  get phone() {
    return this.profileForm.get('contactdetails')?.get('contactdetails');
  }
  get fax() {
    return this.profileForm.get('contactdetails')?.get('fax');
  }
  get email() {
    return this.profileForm.get('contactdetails')?.get('email');
  }
  get secondaryemail() {
    return this.profileForm.get('contactdetails')?.get('secondaryemail');
  }
  resetForm() {
    this.profileForm.reset();
  }
  onSubmit() {
    console.log(this.profileForm.value);
    this.profileForm.reset;
  }
  // uploadImage(event: any, user: User){
  //   this.imageUploadService.uploadImage(event.target.files[0], `images/profile/${user.email}/${user.uid}`)
  //     .pipe(
  //       this.toast.observe({
  //         loading: 'Uploading profile image...',
  //         success: 'Image uploaded successfully',
  //         error: 'There was an error in uploading the image',
  //       }),
  //       concatMap((photoURL)=> this.authService.updateProfile({photoURL})))
  //       .subscribe();
  // }
}
