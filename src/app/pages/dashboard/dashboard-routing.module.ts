import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { NotificationComponent } from './notification/notification.component';
import { AboutComponent } from './about/about.component';
import { AddPostComponent } from './add-post/add-post.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'about', component: AboutComponent },
  { path: 'addPost', component: AddPostComponent },

];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }