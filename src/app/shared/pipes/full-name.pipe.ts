import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from 'src/app/core/models/alumno.interface';

@Pipe({
  name: 'fullName',
})
export class FullNamePipe implements PipeTransform {

  transform(alumno:Alumno): string {
    return `${alumno.nombre} ${alumno.apellido}`;
  }

}
