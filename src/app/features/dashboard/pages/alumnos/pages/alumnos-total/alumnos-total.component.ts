import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Alumno } from 'src/app/core/models/alumno.interface';
import { Curso } from 'src/app/core/models/curso.interface';
import { AlumnosService } from '../../service/alumnos.service';
import { AbmAlumnosComponent } from '../../components/abm-alumnos/abm-alumnos.component';

@Component({
  selector: 'app-alumnos-total',
  templateUrl: './alumnos-total.component.html',
  styleUrls: ['./alumnos-total.component.scss']
})
export class AlumnosTotalComponent {
  alumnos:Alumno[] = []
  cursos: Curso[] = []
  constructor(
    private dialog: MatDialog, 
    private alumnosService: AlumnosService
    ) 
    {}
  ngOnInit(): void {
    this.alumnosService.getAlumnos().subscribe(data=>{
      this.alumnos=data
    })
  }

  addAlumo(student?: Alumno): void {
    const dialogRef = this.dialog.open(AbmAlumnosComponent);

    dialogRef.afterClosed().subscribe(
      {
        next:(result)=> {
          if(result){
            this.alumnosService.addAlumno(result).subscribe(
              data=>{
                this.alumnos= data
              }
            )
          }
        }
        
      }
    );
  }

  editAlumno(alumno:Alumno){
    this.dialog.open(AbmAlumnosComponent,{
      data:alumno
    })
    .afterClosed()
    .subscribe(
      {
        next:(result)=>{
          if(result){
            this.alumnosService.editAlumno(alumno.id,result).subscribe(
              {
                next: (data)=> this.alumnos = data
              }
            )
          }
        }
      }
    )
  }

  deleteStudent(index: number) {
    this.alumnosService.deleteStudent(index).subscribe({
      next:(data) => {
        this.alumnos= data
      }
    })
  }
}
