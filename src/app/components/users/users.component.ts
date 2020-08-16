import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  @Input() dataPath: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<User[]>(this.dataPath).subscribe(users => {
      this.users = users;
    });
  }
}
