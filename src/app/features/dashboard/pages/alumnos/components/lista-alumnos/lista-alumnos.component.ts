
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Alumno } from 'src/app/core/models/alumno.interface';


@Component({
  selector: 'alumnos-lista',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent{
  
  displayedColumns: string[] = ['id', 'nombre', 'email','seccion','editar','eliminar','detalle'];

  @Input()
  datasource: Alumno[]= []

  @Output()
  onIndex:EventEmitter<number> = new EventEmitter()

  @Output()
  onStudent:EventEmitter<Alumno> = new EventEmitter()

  emitirIndex(index:number){
    this.onIndex.emit(index)
  }

  emitirAlumno(student:Alumno){
    this.onStudent.emit(student)
  }

}


