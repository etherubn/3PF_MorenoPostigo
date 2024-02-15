
import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Validator } from 'src/app/shared/Validator/validator';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course } from 'src/app/core/models/course.type';
import { Alumno } from 'src/app/core/models/alumno.interface';
import { CursosService } from '../../../cursos/service/cursos.service';
import { Curso } from 'src/app/core/models/curso.interface';

@Component({
  selector: 'alumnos-abm',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.scss']
})
export class AbmAlumnosComponent implements OnInit{

  courses: Curso[] = []

  form: FormGroup
  idControl: FormControl = new FormControl()
  nombreControl: FormControl = new FormControl<string>('', [Validators.required, Validators.minLength(4)])
  apellidoControl: FormControl = new FormControl<string>('', [Validators.required, Validators.minLength(4)])
  emailControl: FormControl = new FormControl<string>('',[Validator.validEmail])
  cursoControl: FormControl = new FormControl('', [Validators.required])

  constructor(
    private fb: FormBuilder,
    private matDialofRef:MatDialogRef<AbmAlumnosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alumno,
    private cursosService:CursosService
    ) {
    this.form = this.fb.group({
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      email: this.emailControl,
      course: this.cursoControl,
    });
  }
  ngOnInit(): void {
    this.cursosService.getCursos().subscribe(cursos=>{
      this.courses=cursos
    })
    if(!this.data) return
    this.form.reset(this.data)
  }

  fieldName(formControl: AbstractControl,): string {
    let field = ""
    for (let fieldName in this.form.controls) {
      if (this.form.controls[fieldName] === formControl) {
        field = fieldName
      }
    }
    return field
  }

  get alumnoNuevo():Alumno{
    return this.form.value as Alumno
  }

  sendAlumno():void {
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      return
    }
  
    this.matDialofRef.close(this.alumnoNuevo)
  }

  editAlumno():void {
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      return
    }

    this.matDialofRef.close(this.alumnoNuevo)
  }

  onNoClick(): void {
    this.matDialofRef.close();
  }
}
