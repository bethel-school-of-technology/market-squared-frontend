import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any;
  currentUser = null;
  currentIndex = -1;
  username = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.userService.getAll()
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveUsers();
    this.currentUser = null;
    this.currentIndex = -1;
  }

  setActiveUser(user, index): void {
    this.currentUser = user;
    this.currentIndex = index;
  }

  removeAllUsers(): void {
    this.userService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveUsers();
        },
        error => {
          console.log(error);
        });
  }

  searchUser(): void {
    this.userService.findByUser(this.username)
      .subscribe(
        data => {
            this.users = data;
            console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  //Below is where we put the data from the database
  //users: User[];
  //this is place receiving into compoment the url of where to go to find data
  //@Input() dataPath: string;

  //below is depedencyinjection. Creating an instance of httpclient
  //constructor(private http: HttpClient) { }

  //below is calling on httpclient service
  //ngOnInit(): void {
    //below User is the type of data we expect back from server.
    //then pass path of the url which is this.datapath
    //get returns an observable
  //  this.http.get<User[]>(this.dataPath).subscribe(users => {
  //    this.users = users;
  //  });
  //}
}
