import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { authGuard } from './core/guards/auth.guard';
import { dashBoardGuard } from './core/guards/dashboard.guard';

const routes: Routes = [
  {
    path: "dashboard",
    canActivate:[authGuard],
    component:DashboardComponent,
    loadChildren: ()=> import("../app/features/dashboard/dashboard.module").then(m=>m.DashboardModule)
  },
  { path: 'auth', 
    canActivate:[dashBoardGuard],
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) 
  },
  {
    path:"**",
    redirectTo:"auth"
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
