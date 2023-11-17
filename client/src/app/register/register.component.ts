import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() cancelRegister = new EventEmitter();
  showPassword: boolean = false;

  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe({
      next: () => this.cancel(),
      error: err => this.toastr.error(err.error)
    })
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
