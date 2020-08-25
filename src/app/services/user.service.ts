import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL: string = 'http://localhost:3001/users'
  constructor(private http: HttpClient) { }

  getUsers = (): Observable<any> => {
    return this.http.get<any>(this.userURL)
  }
}

// We need a way to create a listing (CREATE)
// We need a way to list all the posts/listings (READ)
// We need a way to see a single post/listing (READ)
// We need a way to edit the listing (UPDATE)
// We need a way to delete the listing (DELETE)
