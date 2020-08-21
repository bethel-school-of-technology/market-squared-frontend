import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: ''
  };

  submitted = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }

  saveUser(): void {
    const data = {
      username: this.user.username,
      password: this.user.password,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email
    };

    this.userService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newUser(): void {
    this.submitted = false;
    this.user = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: ''
    };
  }



  /*
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
   this.userService.getAll().subscribe(users => {
     // this.users = users;
      console.log(users)
    });
  }
  */

}
