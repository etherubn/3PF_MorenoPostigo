import { Observable, mergeMap } from 'rxjs';
import { Injectable } from '@angular/core';
import { Alumno } from 'src/app/core/models/alumno.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  

  constructor(private http:HttpClient) { }

  getAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(`${environment.URI}/alumnos`)
  }

  

  addAlumno(alumno:Alumno):Observable<Alumno[]>{
    // alumnos = [...alumnos,alumno]
    // return this.getAlumnos()
    return this.http.post<Alumno>(`${environment.URI}/alumnos`,alumno).pipe(
      mergeMap(()=>this.getAlumnos())
    )
  }

  editAlumno(id:number,alumnoEditado:Alumno){
    // alumnos = alumnos.map(alumno=> alumno.id===id? {...alumno,...alumnoEditado}:alumno
    // )
    // return this.getAlumnos()
    return this.http.patch(`${environment.URI}/alumnos/${id}`,alumnoEditado).pipe(
      mergeMap(()=> this.getAlumnos())
    )
  }

  deleteStudent(index:number):Observable<Alumno[]>{
    return this.http.delete<Alumno>(`${environment.URI}/alumnos/${index}`).pipe(
      mergeMap(()=>this.getAlumnos())
    )
  }
  
}
