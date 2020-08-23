import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MypostsComponent } from './components/myposts/myposts.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
    // localhost:4200/
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    // localhost:4200/home
    { path: 'home', component: HomeComponent },

    // localhost:4200/profile
    { path: 'profile', component: ProfileComponent },

    // localhost:4200/myposts
    { path: 'myposts', component: MypostsComponent },

    // localhost:4200/posts
    { path: 'post', component: PostComponent},

    // otherwise redirect to home
    // below make a compomonet for 404 route place the 404 componenet below
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
