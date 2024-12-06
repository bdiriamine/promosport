import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  notMatching !: boolean;
  submitted = false;
  constructor() { this.signupForm = this.createFormGroup() }

  ngOnInit(): void {

  }
  createFormGroup(): FormGroup {
    return new FormGroup({
      firstname: new FormControl("", [Validators.required, Validators.minLength(6)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(6)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(6)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(6)]),
      cin: new FormControl('', [Validators.required, Validators.minLength(6)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  
  get f() { return this.signupForm.controls; }


  checkPasswords() {
    let pass = this.signupForm.controls.password.value;
    let confirmPass = this.signupForm.controls.confirmPassword.value;

    if (pass !== confirmPass) {
      this.notMatching = true;
    } else {
      this.notMatching = false;

    }
  }


  onSubmit() {
    this.submitted = true;
    console.log("+++++" + this.signupForm.value.firstname)
  }

}
