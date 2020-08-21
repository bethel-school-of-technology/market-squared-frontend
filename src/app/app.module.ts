import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { MypostsComponent } from './components/myposts/myposts.component';
import { PostComponent } from './components/post/post.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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

