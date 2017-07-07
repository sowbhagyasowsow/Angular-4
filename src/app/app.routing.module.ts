import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {HeroesComponent} from './hero/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '',redirectTo: '/dashboard',pathMatch: 'full'},
  { path: 'dashboard',  component: DashboardComponent },
  {path: 'heroes',component: HeroesComponent},
  {path: 'detail/:id',  component: HeroDetailComponent}

]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
