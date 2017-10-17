/*
 * Mobiera SAS
 * Autor: Ivan Ricardo Peña Sierra
 * Created Date :  03/08/2017
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './auth-guard';
import {PollComponent} from './poll/poll.component';
import { AdminComponent } from './admin/admin.component'
import {AdminLoginComponent} from './admin-login/admin-login.component'



const routes: Routes = [
  { path: '', redirectTo: '/poll', pathMatch: 'full' },
  { path: 'poll',  component:  PollComponent},
  { path: 'stats',  component:  AdminComponent,canActivate: [AuthGuard]},
  { path: 'admin',  component:  AdminLoginComponent},

  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ AuthGuard]
})

export class AppRoutingModule {}
