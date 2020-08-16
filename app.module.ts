import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { MypostsComponent } from './myposts/myposts.component';

@NgModule({
  imports: [
    BrowserModule,
    appRoutingModule
  ],

  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    MypostsComponent
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
