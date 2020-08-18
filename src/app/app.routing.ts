import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MypostsComponent } from './myposts/myposts.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'myposts', component: MypostsComponent },
    { path: 'post', component: PostComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);