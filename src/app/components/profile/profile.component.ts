import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: User = new User();

  userID: number;

  constructor(private actRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {

    // Extract ID from URL
    this.userID = parseInt(this.actRoute.snapshot.paramMap.get('id'));
    console.log(this.userID);

    // Fetch user corresponding to the ID
    this.userService.getOneUser(this.userID).subscribe(response =>{
      console.log(response);
      
      this.currentUser = response;
    });
  }
}
