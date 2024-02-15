import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Curso } from 'src/app/core/models/curso.interface';


@Component({
  selector: 'cursos-lista',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.scss']
})

export class ListaCursosComponent{
  
  displayedColumns: string[] = ['id', 'curso', 'clases','disponibilidad','editar','eliminar'];

  @Input()
  datasource: Curso[]= []

  @Output()
  onIndex:EventEmitter<number> = new EventEmitter()

  @Output()
  onCourse:EventEmitter<Curso> = new EventEmitter()

  emitirIndex(index:number){
    this.onIndex.emit(index)
  }

  emitirCurso(curso:Curso){
    this.onCourse.emit(curso)
  }

}


