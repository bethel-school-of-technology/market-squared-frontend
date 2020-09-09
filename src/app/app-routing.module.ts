import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MypostsComponent } from './components/myposts/myposts.component';
import { PostComponent } from './components/post/post.component';
import { CreateComponent } from './components/create/create.component';
import { ErrorComponent } from './components/error/error.component';


const routes: Routes = [

    //localhost:4200
    { path: '', component: HomeComponent },

    //localhost:4200/profile
    //will need to add :id to end of profile to route to specific profile
    { path: 'profile/:id', component: ProfileComponent },

    //localhost:4200/myposts
    { path: 'myposts', component: MypostsComponent },

    //localhost:4200/post
    { path: 'post', component: PostComponent },

    //localhost:4200/post/1
    { path: 'post/:postId', component: PostComponent },

    //localhost:4200/create
    { path: 'create', component: CreateComponent },

    //localhost:4200/error
    { path: 'error', component: ErrorComponent },

    //localhost:4200/
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    // otherwise redirect to home
    //below make a component for 404 route place the 404 component below
    { path: '**', redirectTo: 'error' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
