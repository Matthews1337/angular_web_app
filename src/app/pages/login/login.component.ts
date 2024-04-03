import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DefaultLoginComponent } from 'src/app/components/default-login/default-login.component';
import { PrimaryInputComponent } from 'src/app//components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ToastrService } from 'ngx-toastr';

interface LoginForm {
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [DefaultLoginComponent, ReactiveFormsModule,PrimaryInputComponent],
  providers: [LoginService]
})
export class LoginComponent {

  loginForm!: FormGroup<LoginForm> ;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
    ) {

    

    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(6)])
    })
  }
 submit(){
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => this.toastService.success('Login feito com sucesso'),
      error: () => this.toastService.error('Erro inesperado, tente novamente mais tarde!')
      
    })

  } 
 navigate(){
    this.router.navigate(["signup"])
  } 
}
