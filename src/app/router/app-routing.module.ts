import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContentComponent} from '../views/cms/content/content.component';
import {LoginComponent} from '../components/login/login.component';

const routes: Routes = [
  { path: '',  redirectTo: 'cms/login', pathMatch: 'full'},
  { path: 'cms/content', component: ContentComponent },
  { path: 'cms/login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
