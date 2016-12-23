import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', loadChildren:'./about/about.module#AboutModule' },
  { path: 'contact', loadChildren:'./contact/contact.module#ContactModule' },
  { path: 'people', loadChildren: './people/people.module#PeopleModule' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'register', loadChildren:'./register/register.module#RegisterModule' },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [routing],
  exports: [RouterModule]
})
export class AppRoutingModule { }
