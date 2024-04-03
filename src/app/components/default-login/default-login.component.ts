import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-login',
  standalone: true,
  templateUrl: './default-login.component.html',
  styleUrls: ['./default-login.component.css']
})
export class DefaultLoginComponent {
@Input() title: string = '';
@Input() paragraph: string = '';
@Input() primary_btn_txt: string = '';
@Input() secondary_btn_txt: string = '';
@Input() disablePrimaryBtn: boolean = true;


@Output("submit") onSubmit = new EventEmitter();
@Output("navigate") onNavigate = new EventEmitter();

submit(){
  this.onSubmit.emit();
}

navigate(){
  this.onNavigate.emit();
}

}
