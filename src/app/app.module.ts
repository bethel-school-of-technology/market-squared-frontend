import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    appRoutingModule
  ],

  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
