import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MypostsComponent } from './components/myposts/myposts.component';
import { PostComponent } from './components/post/post.component';
import { UsersComponent } from './components/users/users.component'

const routes: Routes = [
    //{ path: '',redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: HomeComponent }, //homepage for login and register
    { path: 'users', component: UsersComponent }, //for list of users
    { path: 'users/:id', component: ProfileComponent }, //for individual user
    { path: 'myposts', component: MypostsComponent }, //list of posts
    { path: 'post', component: PostComponent}, //edit post

    // otherwise redirect to home
    //below make a compomonet for 404 route place the 404 componenet below
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }