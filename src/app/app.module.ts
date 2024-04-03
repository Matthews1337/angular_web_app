import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLoginComponent } from './components/default-login/default-login.component';
import { LoginComponent } from './pages/login/login.component';
import { PrimaryInputComponent } from './components/primary-input/primary-input.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HttpClient, provideHttpClient, withFetch} from '@angular/common/http'
import { provideToastr } from 'ngx-toastr';
import { provideAnimations} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultLoginComponent,
    LoginComponent,
    PrimaryInputComponent,
    SignupComponent

  ],
  providers: [
    provideHttpClient(withFetch()),
    provideToastr(),
    provideAnimations()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
