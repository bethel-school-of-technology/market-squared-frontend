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
  id: number;
  posts: Post[];
  regPost: Post = new Post();

  isLoggedIn: Boolean = false;

  jwt:String;
  currentUser:Number;

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

    //Assign token to a variable (jwt)
    this.jwt = localStorage.getItem("token");

    //Determines if user is logged in or not
    this.isLoggedIn = (this.jwt) ? true : false;

    //IF USER IS LOGGED IN, PULL USER DATA FROM TOKEN
    if(this.isLoggedIn == true){
      //Separate the payload from the other items in the token
      let jwtData = this.jwt.split('.')[1];
      
      //Decode token and assign decoded content to 'decodedJwtData'
      let decodedJwtJsonData = atob(jwtData);
      let decodedJwtData = JSON.parse(decodedJwtJsonData);
      
      //Pull User ID from decoded payload
      this.currentUser = decodedJwtData.user_id;

      console.log(this.currentUser);
    }


    // ONLY USE THIS FOR TESTING - DO NOT ACTUALLY WANT THE TOKEN WIPED EVERY TIME THE HOMEPAGE IS LOADED
      // localStorage.removeItem("token");

  }

  createNewUser() {
   this.userService.createNewUser(this.newUser).subscribe(response => {
      console.log(response);
      
    //Pull User ID from response
      this.currentUser = response.user_id;

     this.router.navigate([`/profile/${this.currentUser}`]);

   });
  }

  gotoUser(){
    this.router.navigate([`/profile/${this.currentUser}`]);    
  }

  gotoMyPosts(){
    this.router.navigate([`/myposts/${this.currentUser}`]);  
  }

  logoutUser(){
    localStorage.removeItem("token");
    window.location.reload();
  }


  loginUser(){
    this.userService.loginUser(this.regUser).subscribe(response => {
      localStorage.setItem("token", response.token);
      
      //Assign token to a variable (jwt)
      this.jwt = localStorage.getItem("token");
      
      //Separate the payload from the other items in the token
      let jwtData = this.jwt.split('.')[1];
      
      //Decode token and assign decoded content to 'decodedJwtData'
      let decodedJwtJsonData = atob(jwtData);
      let decodedJwtData = JSON.parse(decodedJwtJsonData);
      
      //Pull User ID from decoded payload
      this.currentUser = decodedJwtData.user_id;

      console.log(this.currentUser);

      //Determines if user is logged in or not
      this.isLoggedIn = (this.jwt) ? true : false;

      this.router.navigate([`/profile/${this.currentUser}`]);

    });
  }

}

