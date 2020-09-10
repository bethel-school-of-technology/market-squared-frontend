import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  posts: Post[] = [];
  newPost: Post=new Post()

  constructor( private userService: UserService) { }

  ngOnInit(): void {
     this.userService.createPost().subscribe(response => {
       this.posts = response;
        console.log(response);
      });
 
  }
  createPost(){
    console.log(this.newPost)
  }
 
}


