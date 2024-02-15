import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course } from 'src/app/core/models/course.type';
import { Curso } from 'src/app/core/models/curso.interface';

@Component({
  selector: 'cursos-abm',
  templateUrl: './abm-cursos.component.html',
  styleUrls: ['./abm-cursos.component.scss']
})
export class AbmCursosComponent implements OnInit {

  courses: Course[] = ['Angular', 'Mercury', 'Rabbit', 'React', 'Vue']

  form: FormGroup
  idControl: FormControl = new FormControl()
  nombreControl: FormControl = new FormControl<string>('', [Validators.required, Validators.minLength(4)])
  clasesControl: FormControl = new FormControl<number>(0, [Validators.required, Validators.min(0)])
  disponibleControl: FormControl = new FormControl<boolean>(false, [Validators.required])


  constructor(
    private fb: FormBuilder,
    private matDialofRef: MatDialogRef<Curso>,
    @Inject(MAT_DIALOG_DATA) public data: Curso
  ) {
    this.form = this.fb.group({
      id: this.idControl,
      nombre: this.nombreControl,
      clases: this.clasesControl,
      disponible: this.disponibleControl
    });
  }
  ngOnInit(): void {
    if (!this.data) return
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

  get cursoNuevo(): Curso {
    return this.form.value as Curso
  }

  sendCurso(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      return
    }

    this.matDialofRef.close(this.cursoNuevo)
  }

  editCurso(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      return
    }

    this.matDialofRef.close(this.cursoNuevo)
  }

  onNoClick(): void {
    this.matDialofRef.close();
  }
}
