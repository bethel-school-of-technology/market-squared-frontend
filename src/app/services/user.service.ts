import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL: string = 'http://localhost:3001/users';
  indexURL: string = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

  // We need a way to find users (READ)
  getUsers = (): Observable<any> => {
    return this.http.get<any>(this.userURL);
  }

  // We need a way to get a single user (READ)
  // Component needs to send an ID for the user

  getOneUser(reqID: number): Observable<User> {
    return this.http.get<User>(`${this.indexURL}/profile/${reqID}`);
  }

  // We need a way to create a new user (CREATE)

  createNewUser(newUser: User): Observable<User> {
    return this.http.post<User>(this.indexURL, newUser);
  }

  // We need a way to Login (CREATE)
  loginUser(regUser: User): Observable<User> {
    return this.http.post<User>(`${this.indexURL}/login`, regUser);
  }

  // We need a way to edit the user (UPDATE)
  // Component needs to provide the ID as well as the updated user info
  updateUser(editID: number, edittedInfo: User): Observable<User> {
    return this.http.put<User>(`${this.indexURL}/profile/${editID}`, edittedInfo);
  }

  // We need a way to create a listing (CREATE)
  createPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.indexURL);
  }
 
  // We need a way to list all the posts/listings (READ)
  getMyPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.indexURL);
  }

  // We need a way to see a single post/listing (READ)
  // We need a way to edit the listing (UPDATE)
  // We need a way to delete the listing (DELETE)

}


