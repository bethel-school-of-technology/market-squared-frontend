import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL: string = 'http://localhost:3306/users'
  indexURL: string = 'http://localhost:3306'

  constructor(private http: HttpClient) { }

  // We need a way to find users (READ)
  getUsers = (): Observable<any> => {
    return this.http.get<any>(this.userURL)
  }

  // We need a way to create a new user (CREATE)
  createUser(newUser: User): Observable<User>{
    return this.http.post<User>(this.indexURL, newUser);

  }

// We need a way to create a listing (CREATE)
// We need a way to list all the posts/listings (READ)
// We need a way to see a single post/listing (READ)
// We need a way to edit the listing (UPDATE)
// We need a way to delete the listing (DELETE)

}


