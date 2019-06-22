import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { canActivate, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { E404Component } from './shared/pages/e404/e404.component';
import { LoginComponent } from './core/authentication/pages/login/login.component';
import { RegisterComponent } from './core/authentication/pages/register/register.component';

import { redirectLoggedInToHome } from './core/guards/const-def.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, ...canActivate(redirectLoggedInToHome) },
  { path: 'register', component: RegisterComponent, ...canActivate(redirectLoggedInToHome) },
  { path: 'home', loadChildren: './modules/home/home.module#HomeModule' },
  { path: 'novel', loadChildren: './modules/novel/novel.module#NovelModule' },
  { path: 'user', loadChildren: './modules/user/user.module#UserModule' },
  { path: 'browse', loadChildren: './modules/browse/browse.module#BrowseModule' },
  // Default
  { path: '**', component: E404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
