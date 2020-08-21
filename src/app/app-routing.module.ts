import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MypostsComponent } from './components/myposts/myposts.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
    { path: '',redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'myposts', component: MypostsComponent },
    { path: 'post', component: PostComponent},

    // otherwise redirect to home
    //below make a compomonet for 404 route place the 404 componenet below
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);