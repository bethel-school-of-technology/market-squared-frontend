import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Post } from '../../models/post';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {
  postID: number;
  currentPost: Post = new Post();
  isUpdated: Boolean = false;
  userID: number;
  isLoggedIn:Boolean;
  currentUser: Number;
  jwt:String;

  constructor(private actRoute: ActivatedRoute, 
              private userService: UserService, 
              private router: Router) { }

  ngOnInit(): void {
    
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

    }
    
    // Extract ID from URL
    this.postID = parseInt(this.actRoute.snapshot.paramMap.get('id'));
    console.log(this.postID);

    // Fetch post corresponding to the ID
    this.userService.getOneEditPost(this.postID).subscribe(response => {
      console.log(response);
      this.currentPost = response;
    });
    
  }


  deletePost(){
    this.userService.deletePost(this.userID).subscribe(response => {
      console.log(response);
      this.router.navigate([`/myposts/${this.currentUser}`])
    })
  }

  resetAlert() {
    this.isUpdated = false;
  }

  gotoUser(){
    this.router.navigate([`/profile/${this.currentUser}`]);    
  }

  gotoMyPosts(){
    this.router.navigate([`/myposts/${this.currentUser}`]);   
  }

  goHome(){
    this.router.navigateByUrl('/');
  }

  updatePost() {
    this.userService.updatePost(this.postID, this.currentPost).subscribe(response => {
      this.isUpdated = true;
      console.log(this.postID);
    });
  }

  logoutUser(){
    localStorage.removeItem("token");
    this.router.navigateByUrl('/');
  }  

}
