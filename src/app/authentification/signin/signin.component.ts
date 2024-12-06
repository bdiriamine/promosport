import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['../signup/signup.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm!: FormGroup;
  notMatching !: boolean;
  submitted = false;

  constructor() {

  }

  ngOnInit(): void {
    this.signinForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(6)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  onSubmit() {
    this.submitted = true;
    console.log("+++++" + this.signinForm.value.firstname)
  }


}
