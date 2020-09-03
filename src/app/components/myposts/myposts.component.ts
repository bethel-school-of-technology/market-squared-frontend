import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Post } from '../../models/post';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.component.html',
  styleUrls: ['./myposts.component.css']
})
export class MypostsComponent implements OnInit {
  posts: Post[] = [];


  constructor(private actRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    
    this.userService.getMyPosts().subscribe(response => {
      this.posts = response;
       console.log(response);
     });

  }

}
