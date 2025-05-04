
import { NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule, NgIf, FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  userForm = {}

  // form = new FormGroup(
  //   {
  //     name: new FormControl("", [Validators["required"]]),
  //     password: new FormControl("", [Validators.minLength(8), Validators["required"]])
  //   }
  // )

  handleSubmit(e: Event) {
    e.preventDefault();
  
  }

  // get name() {
  //   return this.form.get("name")
  // }

  // get password() {
  //   return this.form.get("password")
  // }
  handleFormSubmitTemplateDriven(val: NgForm) {
    console.log("valuesss", val)

  }
}
