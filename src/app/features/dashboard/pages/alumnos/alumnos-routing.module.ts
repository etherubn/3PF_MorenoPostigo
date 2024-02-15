import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { AlumnoDetailComponent } from './pages/alumno-detail/alumno-detail.component';
import { AlumnosTotalComponent } from './pages/alumnos-total/alumnos-total.component';


const routes: Routes = [
  {
    path: '',
    component: AlumnosComponent,
    children: [
      {
        path: "listaAlumnos",
        component: AlumnosTotalComponent
      },
      {
        path: ":id",
        component: AlumnoDetailComponent
      },
      {
        path:"**",
        redirectTo:"listaAlumnos"
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
