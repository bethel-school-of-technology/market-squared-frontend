import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[];

  newUser: User = new User();

  regUser: User = new User();

   //For Google Maps
  lat = 40.730610;
  lng = -73.935242;


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {
      this.users = response;
      console.log(response);
    });
  }

  createNewUser() {
    this.userService.createNewUser(this.newUser).subscribe(response => {
      console.log(response);
      this.router.navigate(['profile']);
    });
  }

  loginUser(){
    this.userService.loginUser(this.regUser).subscribe(response => {
      console.log(response);
      this.router.navigate(['home']);
    });
  }

  /* onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.customer = this.registerForm.value;
    this.customerService.AddNewCustomer(this.customer)
      .subscribe(a => {
        console.log(a);
        if (a) {
          this.router.navigate(['/customer/login']);
        }
      })
    console.log(this.registerForm.value);
  } */

}
