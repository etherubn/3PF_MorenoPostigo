import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:"",
    redirectTo:"alumnos",
    pathMatch:"full"
  },
  {
    path: 'alumnos', 
    loadChildren: () => import("../dashboard/pages/alumnos/alumnos.module").then(m => m.AlumnosModule)
  },
  { 
    path: 'cursos', 
    loadChildren: () => import('../dashboard/pages/cursos/cursos.module').then(m => m.CursosModule) 
  },
  { 
    path: 'inscripciones', 
    loadChildren: () => import('../dashboard/pages/inscripciones/inscripciones.module').then(m => m.InscripcionesModule) 
  },
  {
    path:"**",
    redirectTo:"alumnos"
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
