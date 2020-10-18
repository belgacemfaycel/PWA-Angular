import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FooterComponent } from './../../_shared/layout/footer/footer.component';
import { HeaderComponent } from './../../_shared/layout/header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { NotificationComponent } from './notification/notification.component';
import { AboutComponent } from './about/about.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    NotificationComponent,
    AboutComponent

  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,

  ]
})
export class DashboardModule { }
