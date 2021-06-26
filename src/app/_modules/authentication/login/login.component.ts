import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isSignin = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  switchScreen(status) {
    this.isSignin = status;
  }

  login() {
    this.router.navigateByUrl('/home');
  }

}
