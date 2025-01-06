import { Component, inject } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AsyncPipe, TitleCasePipe } from '@angular/common';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css'],
    standalone: true,
    imports: [RouterLink, RouterLinkActive, BsDropdownModule, FormsModule, AsyncPipe, TitleCasePipe]
})
export class NavComponent {
  model: any = {};
  accountService = inject(AccountService);
  router = inject(Router);

  login() {
    this.accountService.login(this.model).subscribe({
      next: () => this.router.navigateByUrl('/members')
    })
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

}
