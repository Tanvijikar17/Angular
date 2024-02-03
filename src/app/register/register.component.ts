import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  errorMessage!: string;
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  mobileNumber = new FormControl('',[Validators.required, Validators.pattern(/^[0-9]{10}$/)]);

  constructor(private router: Router) {}

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Email is required';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'Password is required';
    }
    return this.password.hasError('minlength')
      ? 'Password should be at least 8 characters long'
      : '';
  }

  getMobileNumberErrorMessage() {
    if (this.mobileNumber.hasError('required')) {
      return 'Mobile number is required';
    }
    if(this.mobileNumber.hasError('pattern')){
      return 'Mobile number should be 10 digits';
    }
    return '';
  }
}

// import { Component, OnInit } from '@angular/core';
// import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
// import { Router } from '@angular/router';


// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit{
//   registerForm!: FormGroup;
//   errorMessage!: string;
//   hide = true;

//   constructor(private router: Router, private fb: FormBuilder) {}

//   ngOnInit() {
//       this.registerForm = this.fb.group({ 
//       email = new FormControl('', [Validators.required, Validators.email]);
//       password = new FormControl('', [Validators.required, Validators.minLength(8)]);
//       mobileNumber = new FormControl('',[Validators.required, Validators.pattern(/^[0-9]{10}$/)])  
//     }
//   }

//   getErrorMessage() {
//     if (this.email.hasError('required')) {
//       return 'Email is required';
//     }

//     return this.email.hasError('email') ? 'Not a valid email' : '';
//   }


//   getPasswordErrorMessage() {
//     if (this.password.hasError('required')) {
//       return 'Password is required';
//     }
//     return this.password.hasError('minlength')
//       ? 'Password should be at least 8 characters long'
//       : '';
//   }

//   getMobileNumberErrorMessage() {
//     if (this.mobileNumber.hasError('required')) {
//       return 'Mobile number is required';
//     }
//     if(this.mobileNumber.hasError('pattern')){
//       return 'Mobile number should be 10 digits';
//     }
//     return '';
//   }
// }

