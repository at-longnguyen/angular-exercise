import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

import { ConfirmDeactiveGuard } from './confirm-deactive.guard';
import { ProfileResolve } from './profile/profile.resolve';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canDeactivate: [ConfirmDeactiveGuard],
    resolve: { profile: ProfileResolve }
  }
];

@NgModule({
  declarations: [DashboardComponent, ProfileComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
