import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { appRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { MypostsComponent } from './components/myposts/myposts.component';
import { PostComponent } from './components/post/post.component';
import { CreateComponent } from './components/create/create.component';

@NgModule({
  imports: [
    BrowserModule,
    appRoutingModule,
    HttpClientModule,
    FormsModule
  ],

  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    MypostsComponent,
    PostComponent,
    CreateComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
