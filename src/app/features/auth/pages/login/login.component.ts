import { AuthService } from './../../service/auth.service';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/user.interface';
import { Validator } from 'src/app/shared/Validator/validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formulario:FormGroup
  correoControl: FormControl = new FormControl("",[Validator.validEmail])
  passwordControl:FormControl = new FormControl("",[Validators.required,Validators.minLength(8)])

  constructor(
    private fb:FormBuilder,
    private authService:AuthService
    ){
    this.formulario = this.fb.group({
      email: this.correoControl,
      password: this.passwordControl
    })
  }

  onUser(){
    if(this.formulario.invalid){
      this.formulario.markAllAsTouched()
      return
    }
    this.authService.login(this.authUser).subscribe()
  }
  fieldName(formControl: AbstractControl,): string {
    let field = ""
    for (let fieldName in this.formulario.controls) {
      if (this.formulario.controls[fieldName] === formControl) {
        field = fieldName
      }
    }
    return field
  }

  get authUser():User{
    const user = this.formulario.value as User
    return user
  }

  
}
