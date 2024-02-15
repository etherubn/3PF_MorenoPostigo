import { CursosService } from './../cursos/service/cursos.service';
import { AlumnosService } from './service/alumnos.service';
import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { AbmAlumnosComponent } from './components/abm-alumnos/abm-alumnos.component';
import { Alumno } from 'src/app/core/models/alumno.interface';
import { Curso } from 'src/app/core/models/curso.interface';


@Component({
  selector: 'alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent{

  
}
