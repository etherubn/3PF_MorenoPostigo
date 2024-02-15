import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { AbmAlumnosComponent } from './components/abm-alumnos/abm-alumnos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnosComponent } from './alumnos.component';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnoDetailComponent } from './pages/alumno-detail/alumno-detail.component';
import { AlumnosTotalComponent } from './pages/alumnos-total/alumnos-total.component';




@NgModule({
  declarations: [
    ListaAlumnosComponent,
    AbmAlumnosComponent,
    AlumnosComponent,
    AlumnoDetailComponent,
    AlumnosTotalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    AlumnosRoutingModule
  ]
})
export class AlumnosModule { }
