import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { HerosComponent } from './heros/heros.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }   from './hero-detail/hero-detail.component';

const routes: Routes=[
{path:'heros',component:HerosComponent},
{ path: 'dashboard', component: DashboardComponent },
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
{ path: 'details/:id', component: HeroDetailComponent }
];

@NgModule({
  
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ]

})
export class AppRoutingModule { }
