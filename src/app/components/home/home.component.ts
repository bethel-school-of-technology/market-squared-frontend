import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user'
import { UserService } from '../../services/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[];

  newUser: User = new User();

  regUser: User = new User();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
   this.userService.getUsers().subscribe(response => {
     this.users = response;
      console.log(response);
    });
  }

  createNewUser(){
    this.userService.createUser(this.newUser).subscribe(response => {
      console.log(this.newUser);
      this.router.navigate([""]);
    })
  }

}
