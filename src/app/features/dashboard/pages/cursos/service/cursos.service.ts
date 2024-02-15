
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Curso } from 'src/app/core/models/curso.interface';


let cursos: Curso[] = [
  {
    id: 1,
    nombre: 'React',
    clases: 25,
    disponible: true
  },
  {
    id: 2,
    nombre: 'Mercury',
    clases: 24,
    disponible: true
  },
  {
    id: 3,
    nombre: 'Rabbit',
    clases: 15,
    disponible: true
  },
  {
    id: 4,
    nombre: 'Angular',
    clases: 100,
    disponible: true
  },
  {
    id: 5,
    nombre: 'Vue',
    clases: 0,
    disponible: true
  }
]

@Injectable({
  providedIn: 'root'
})
export class CursosService {



  constructor() { }

  getCursos(): Observable<Curso[]> {
    return of(cursos)
  }

  addCurso(curso: Curso):Observable<Curso[]> {
    cursos = [...cursos, curso]

    return this.getCursos()
  }

  editCurso(cursoEditado: Curso):Observable<Curso[]> {
    cursos = cursos.map(curso => {
      return curso.id === cursoEditado.id ? cursoEditado : curso
    }
    )

    return this.getCursos()
  }

  deleteCurso(index: number):Observable<Curso[]> {
    cursos = cursos.filter((curso) => curso.id !== index)
    return this.getCursos()
  }

}
