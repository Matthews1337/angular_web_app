import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DefaultLoginComponent } from 'src/app/components/default-login/default-login.component';
import { PrimaryInputComponent } from 'src/app//components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ToastrService } from 'ngx-toastr';

interface signupForm {
  name:FormControl,
  email: FormControl,
  password: FormControl,
  passwordConfirm: FormControl
}

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [DefaultLoginComponent, ReactiveFormsModule,PrimaryInputComponent],
  providers: [LoginService]
})
export class SignupComponent {

  signupForm!: FormGroup<signupForm> ;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
    ) {

    

    this.signupForm = new FormGroup({
      name: new FormControl('',[Validators.required, Validators.minLength(3)]),
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('',[Validators.required, Validators.minLength(6)])
    })
  }
 submit(){
    this.loginService.login(this.signupForm.value.email, this.signupForm.value.password).subscribe({
      next: () => this.toastService.success('Login feito com sucesso'),
      error: () => this.toastService.error('Erro inesperado, tente novamente mais tarde!')
      
    })

  } 
 navigate(){
    this.router.navigate(["login"])
  } 
}
