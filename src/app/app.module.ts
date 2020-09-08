import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { appRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { MypostsComponent } from './components/myposts/myposts.component';
import { PostComponent } from './components/post/post.component';
import { CreateComponent } from './components/create/create.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDpohMSUHiRlD-L_0Gd4TDIE1OVcDqTtuQ'
    }),
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
    CreateComponent,
    ErrorComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
