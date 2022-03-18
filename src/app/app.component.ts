import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { PublicService } from './services/public.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Employee Management';
  constructor(private authService: AuthService, private publicService: PublicService) { }
  ngOnInit(): void {
    this.authService.autoLogin();
  }
}
