import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './pages/public/public.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { routes as PublictRoutes } from './pages/public/public-routing.module';
import { routes as DashboardRouter } from './pages/dashboard/dashboard-routing.module';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'public', component: PublicComponent, children: [...PublictRoutes] },
  { path: 'dashboard', component: DashboardComponent, children: [...DashboardRouter], canActivate: [AuthGuard] },
  // otherwise redirect to home
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


