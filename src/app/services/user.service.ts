import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const userURL = 'http://localhost:4200/users';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  constructor(private http: HttpClient) { }

  getAll = (): Observable<any> => {
    return this.http.get(userURL);
  }

  get(id): Observable<any> {
    return this.http.get(`${userURL}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(userURL, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${userURL}/${id}`, data);
  }

  delete(id):Observable<any> {
    return this.http.delete(`${userURL}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(userURL);
  }

  findByUser(user): Observable<any> {
    return this.http.get(`${userURL}?user=${user}`);
  }
}

