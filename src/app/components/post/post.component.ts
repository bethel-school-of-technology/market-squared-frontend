import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Post } from 'src/app/models/post'
import { User } from '../../models/user';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  currentPost: Post = new Post();
  postId: number;
  jwt: String;
  currentUser: Number;
  isLoggedIn: Boolean = false;

  constructor(private actRoute: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit(): void {

     // Extract ID from URL
     this.postId = parseInt(this.actRoute.snapshot.paramMap.get('postId'));
     console.log(this.postId);
 
     // Fetch user corresponding to the ID
     this.userService.getOnePost(this.postId).subscribe(response => {
       console.log(response);
       this.currentPost = response;
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
    }

  }

  gotoUser(){
    this.router.navigate([`/profile/${this.currentUser}`]);    
  }

  gotoMyPosts(){
    this.router.navigateByUrl('/myposts');    
  }

  goHome(){
    this.router.navigateByUrl('/');
  }

  logoutUser(){
    localStorage.removeItem("token");
    this.router.navigateByUrl('/');
  }

}