import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { canActivate } from '@angular/fire/auth-guard';

import { redirectUnauthorizedToLogin } from 'src/app/core/guards/const-def.guard';

import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { ProfileOverviewComponent } from './pages/profile-overview/profile-overview.component';
import { UserResolver } from './resolvers/user.resolver';
import { ProfileArchiveComponent } from './pages/profile-archive/profile-archive.component';
import { ProfileWorkshopComponent } from './pages/profile-workshop/profile-workshop.component';
import { ProfileReviewsComponent } from './pages/profile-reviews/profile-reviews.component';
import { ProfileReadingHistoryComponent } from './pages/profile-reading-history/profile-reading-history.component';
import { ProfileFavoritesComponent } from './pages/profile-favorites/profile-favorites.component';
import { NavIdResolver } from './resolvers/nav-id.resolver';

const routes: Routes = [
    {
        path: ':uid',
        component: ProfileOverviewComponent
    },
    {
        path: 'me/edit',
        component: EditProfileComponent
    },
    {
        path: ':uid/archive',
        component: ProfileArchiveComponent
    },
    {
        path: ':uid/workshop',
        component: ProfileWorkshopComponent
    },
    {
        path: ':uid/reviews',
        component: ProfileReviewsComponent
    },
    {
        path: ':uid/reading-history',
        component: ProfileReadingHistoryComponent
    },
    {
        path: ':uid/favorites',
        component: ProfileFavoritesComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        UserResolver
    ]
})
export class UserRoutingModule { }
