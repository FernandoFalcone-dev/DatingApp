import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() cancelRegister = new EventEmitter();
  showPassword: boolean = false;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe({
      next: () => this.cancel(),
      error: err => console.log(err)
    })
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
