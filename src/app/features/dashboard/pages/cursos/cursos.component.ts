import { CursosService } from './service/cursos.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Curso } from 'src/app/core/models/curso.interface';
import { AbmCursosComponent } from './components/abm-cursos/abm-cursos.component';



@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit{
  
  cursos: Curso[] = []

  constructor(private dialog: MatDialog,private cursosService:CursosService){

  }

  ngOnInit(): void {
    this.cursosService.getCursos().subscribe(data =>{
      this.cursos = data
    })
  }

  openDialog(curso: Curso | undefined): void {
    const dialogRef = this.dialog.open(AbmCursosComponent, {
      data: curso
    });

    dialogRef.afterClosed().subscribe((result: Curso) => {
      if (!result) return

      if (!result.id) {
        result['id'] = new Date().getTime()
        this.cursosService.addCurso(result).subscribe({
          next: (data)=> {
            this.cursos = data
          }
        })
        return
      }

      this.cursosService.editCurso(result).subscribe({
        next: (data)=>{
          this.cursos= data
        }
      })
    });
  }

  deleteCurso(index: number) {
    this.cursosService.deleteCurso(index).subscribe({
      next:(data) => {
        this.cursos= data
      }
    })
  }
}
