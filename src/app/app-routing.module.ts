import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { HerosComponent } from './heros/heros.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

const routes: Routes=[
{path:'heros',component:HerosComponent},
{ path: 'dashboard', component: DashboardComponent },
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ]

})
export class AppRoutingModule { }
