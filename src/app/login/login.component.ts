import { Component, OnInit } from '@angular/core';
import { AuthService } from './../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logIn() {
    this.authService.login().subscribe(data => {
      if (data) {
        const redirect = this.authService.redirectUrl ?
          this.authService.redirectUrl: '/login';
          this.router.navigate([redirect]);
      }
    });
  }
}
