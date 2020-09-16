import { Component, OnInit, Input, ViewChild, ElementRef, NgZone } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { Post } from '../../models/post';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { MapsAPILoader } from '@agm/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[];
  newUser: User = new User();
  regUser: User = new User();
  id: number;
  posts: Post[];
  regPost: Post = new Post();

  isLoggedIn: Boolean = false;

  jwt: String;
  currentUser: Number;

  //For Google Maps
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;

  @ViewChild('search')
  public searchElementRef: ElementRef;


  constructor(
    private userService: UserService,
    private router: Router,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {
      this.users = response;
      console.log(response);
    });

    this.userService.getPosts().subscribe(response => {
      this.posts = response;
      console.log(response);
    });

    //Assign token to a variable (jwt)
    this.jwt = localStorage.getItem("token");

    //Determines if user is logged in or not
    this.isLoggedIn = (this.jwt) ? true : false;

    //IF USER IS LOGGED IN, PULL USER DATA FROM TOKEN
    if (this.isLoggedIn == true) {
      //Separate the payload from the other items in the token
      let jwtData = this.jwt.split('.')[1];

      //Decode token and assign decoded content to 'decodedJwtData'
      let decodedJwtJsonData = atob(jwtData);
      let decodedJwtData = JSON.parse(decodedJwtJsonData);

      //Pull User ID from decoded payload
      this.currentUser = decodedJwtData.user_id;

      console.log(this.currentUser);
    }

    // ONLY USE THIS FOR TESTING - DO NOT ACTUALLY WANT THE TOKEN WIPED EVERY TIME THE HOMEPAGE IS LOADED
    // localStorage.removeItem("token");

    //Google Maps
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });

  }

  //Not in ngOnInit
  createNewUser() {
    this.userService.createNewUser(this.newUser).subscribe(response => {
      console.log(response);

      //Pull User ID from response
      this.currentUser = response.user_id;

      this.router.navigate([`/profile/${this.currentUser}`]);

    });
  }

  gotoUser() {
    this.router.navigate([`/profile/${this.currentUser}`]);
  }

  gotoMyPosts() {
    this.router.navigate([`/myposts/${this.currentUser}`]);
  }

  logoutUser() {
    localStorage.removeItem("token");
    window.location.reload();
  }


  loginUser() {
    this.userService.loginUser(this.regUser).subscribe(response => {
      localStorage.setItem("token", response.token);

      //Assign token to a variable (jwt)
      this.jwt = localStorage.getItem("token");

      //Separate the payload from the other items in the token
      let jwtData = this.jwt.split('.')[1];

      //Decode token and assign decoded content to 'decodedJwtData'
      let decodedJwtJsonData = atob(jwtData);
      let decodedJwtData = JSON.parse(decodedJwtJsonData);

      //Pull User ID from decoded payload
      this.currentUser = decodedJwtData.user_id;

      console.log(this.currentUser);

      //Determines if user is logged in or not
      this.isLoggedIn = (this.jwt) ? true : false;

      this.router.navigate([`/profile/${this.currentUser}`]);

    });
  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }


  markerDragEnd($event: any) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }


}
