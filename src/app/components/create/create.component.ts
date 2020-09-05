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

  constructor() { }

  ngOnInit(): void {
    this.userService.getMyPosts().subscribe(response => {
      this.posts = response;
       console.log(response);
     });
 
  }
  private userService: UserService
}


