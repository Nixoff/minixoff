import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { User } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[];

  constructor(private service: LoginService) { }

  ngOnInit() {
    this.service.list().subscribe(console.log);
  }

}
