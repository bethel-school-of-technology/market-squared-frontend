import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  //Below is where we put the data from the database
  users: User[];
  //this is place receiving into compoment the url of where to go to find data
  @Input() dataPath: string;

  //below is depedencyinjection. Creating an instance of httpclient
  constructor(private http: HttpClient) { }

  //below is calling on httpclient service
  ngOnInit(): void {
    //below User is the type of data we expect back from server.
    //then pass path of the url which is this.datapath
    //get returns an observable
    this.http.get<User[]>(this.dataPath).subscribe(users => {
      this.users = users;
    });
  }
}
