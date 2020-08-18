import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { MypostsComponent } from './myposts/myposts.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http'; 
import { UsersComponent } from './components/users/users.component';

@NgModule({
  imports: [
    BrowserModule,
    appRoutingModule,
    HttpClientModule
  ],

  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    MypostsComponent,
    PostComponent,
    UsersComponent
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
