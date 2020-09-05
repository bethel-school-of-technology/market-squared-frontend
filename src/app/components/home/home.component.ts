import { Component, OnInit, Input } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { Post } from '../../models/post';
import { UserService } from '../../services/user.service';
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

  posts: Post[];
  regPost: Post = new Post();

   //For Google Maps
  lat = 40.730610;
  lng = -73.935242;


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {
      this.users = response;
      console.log(response);
    });

    this.userService.getPosts().subscribe(response => {
      this.posts = response;
      console.log(response);
    });
  }

  createNewUser() {
    this.userService.createNewUser(this.newUser).subscribe(response => {
      console.log(response);
      this.router.navigate(['profile']);
    });
  }


  loginUser(){
    this.userService.loginUser(this.regUser).subscribe(response => {
      localStorage.setItem("token", response.token);
      console.log(localStorage.getItem("token"));
      // this.router.navigate(['home']);
    });
  }



}

