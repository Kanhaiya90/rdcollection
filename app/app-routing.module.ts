import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './pages/admin/add-client/add-client.component';
import { AllClientComponent } from './pages/admin/all-client/all-client.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { DuelistComponent } from './pages/admin/duelist/duelist.component';
import { HistoryDetailComponent } from './pages/admin/history-detail/history-detail.component';
import { UserdetailsComponent } from './pages/admin/userdetails/userdetails.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminGuard } from './services/admin.guard';

const routes: Routes = [
  {
    path :'',
    component : LoginComponent,
    pathMatch : 'full',
  },
  {
    path:'admin',
    component:DashboardComponent,
    canActivate : [AdminGuard],
    children : [
      {
        path:'',
        component:WelcomeComponent,
        pathMatch : 'full'
      },
      {
        path:'client-list',
        component:AllClientComponent,
        pathMatch:'full'
      },
      {
        path:'add-client',
        component:AddClientComponent,
        pathMatch:'full'
      },
      {
        path:'user-details/:cid',
        component:UserdetailsComponent,
        pathMatch:'full'
      },
      {
        path:'history-detail',
        component:HistoryDetailComponent,
        pathMatch:'full'
      },
      {
        path:'duelist',
        component:DuelistComponent,
        pathMatch:'full'
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
