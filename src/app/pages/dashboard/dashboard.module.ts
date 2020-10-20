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
import { FormsModule } from '@angular/forms';
import { DataService } from './../../_services/data.service';

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
    FormsModule
  ],
  providers: [DataService]
})
export class DashboardModule { }
